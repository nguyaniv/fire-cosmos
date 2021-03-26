import React, { useEffect, useState } from 'react'
import { StoreProducts } from '../data/StoreProducts'
import Products from './Products'
import Pagination from './Pagination'
import { useHistory } from 'react-router-dom';
import Filters from './Filters'
import { useAuth, useStoreUpdate } from '../contexts/FirebaseContext';
import { addToCart } from '../service/cartService'

export default function ProductList() {
    const [, setIsVisible] = useState(false);
    const [userMail, setUserMail] = useState(undefined)
    const [itemAdd, setItemAdd] = useState(true)
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const [products, setProducts] = useState([])
    const updateStore = useStoreUpdate()
    const user = useAuth()
    const history = useHistory()

    const scrollToProducts = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    };


    const filterProducts = async (catagury) => {
        if (catagury === 'all') return setProducts(StoreProducts)
        const filteredProducts = StoreProducts.filter(product => {
            return product.category === catagury
        })
        setProducts(filteredProducts)
    }


    const OnAddToCart = async (itemId, name, url, price, category, type, description) => {
        const userColl = userMail

        try {
            await addToCart(userColl, itemId, name, url, price, category, type, description)
            setItemAdd(false)
            updateStore()
            setTimeout(() => {
                setItemAdd(true)
            }, 1500);
        }
        catch {
            history.push("/login")
        }
    }

    useEffect(() => {
        if (user.currentUser) setUserMail(user.currentUser.email)
        setProducts(StoreProducts)

    }, [user.currentUser])

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    if (!products) return
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <section className="products-list">
            <Filters setCurrentPage={setCurrentPage} filterProducts={filterProducts} />
            <h3 className={itemAdd ? `cart-added` : 'cart-added active'}>Item has been added to your cart</h3>
            { products &&
                <>
                    <Products cart={OnAddToCart} products={currentProducts} loading={loading} />
                    <Pagination scrollToProducts={scrollToProducts}
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        totalPosts={products.length}
                        paginate={paginate}
                    />
                </>
            }
        </section>
    )
}






// function addToCart(itemId, name, url, price, category, type, description) {
//     const cartItem = { itemId, name, url, price, category, type, description }
//     if (userMail === undefined) return history.push('/login')


//     const userDoc = firebase.firestore().collection("cart").doc(userMail)
//     userDoc.get().then((doc) => {
//         if (doc.exists) {
//             const updateCart = async () => {
//                 await userDoc.update({
//                     item: firebase.firestore.FieldValue.arrayUnion(cartItem)
//                 })
//                 await setItemAdd(false)
//                 await updateStore()
//                 setTimeout(() => {
//                     setItemAdd(true)
//                 }, 3000);
//             }
//             updateCart()
//         }
//         else {
//             const setCart = async () => {
//                 await userDoc.set({
//                     item: firebase.firestore.FieldValue.arrayUnion(cartItem)
//                 })
//                 await updateStore()
//             }
//             setCart()
//         }
//     })