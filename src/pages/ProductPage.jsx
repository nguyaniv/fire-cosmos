import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { StoreProducts } from '../data/StoreProducts'
import { useAuth, useStoreUpdate } from '../contexts/FirebaseContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from '../service/cartService'

export default function ProductPage() {
    const [product, setProduct] = useState('')
    const [userMail, setUserMail] = useState(undefined)
    const [itemAdd, setItemAdd] = useState(true)
    const user = useAuth()
    const { id } = useParams()
    const updateStore = useStoreUpdate()
    const history = useHistory()

  
    const getProduct = async () => {
        let foundProduct = await StoreProducts.filter(product => product._id === +id)
        setProduct(...foundProduct)
    }

    const OnAddToCart = async (itemId, name, url, price, category, type, description) => {
        const userColl =  userMail

        try {
            await addToCart(userColl, itemId, name, url, price, category, type, description)
            await updateStore()
            await setItemAdd(false)
            await setTimeout(() => {
                setItemAdd(true)
            }, 3000); 
        }
        catch {
            return history.push('/login')
        }

    }

    useEffect(() => {
        if (user.currentUser) setUserMail(user.currentUser.email)
        if (id !== 0) getProduct()
    }, [id])

    return (
        <main className="product-page">
            <div className="container">
            <h2 className={itemAdd ? `cart-added` : 'cart-added active'}>Item has been added to your cart</h2>

                <h3>{product.name}</h3>
                <div className="img-arrow-container">
                    {product._id - 1 === 0 ?
                        <Link to={`/store/${1}`}><FontAwesomeIcon size="lg" icon={faArrowAltCircleLeft} /></Link>
                        :
                        <Link to={`/store/${product._id - 1}`}><FontAwesomeIcon size="lg" icon={faArrowAltCircleLeft} /></Link>
                    }
                    <img height="300px" width="300px" src={product.url} />
                    {product._id + 1 === 10 ?
                        <Link to={`/store/${1}`}><FontAwesomeIcon size="lg" icon={faArrowAltCircleRight} /></Link>
                        :
                        <Link to={`/store/${product._id + 1}`}><FontAwesomeIcon size="lg" icon={faArrowAltCircleRight} /></Link>
                    }
                </div>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button onClick={async () => {
                    await OnAddToCart(product._id, product.name, product.url, 
                        product.price, product.category, product.type, product.description)
                }}>Add To Cart</button>
            </div>
        </main>
    )
}
