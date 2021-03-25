import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreUpdate } from '../contexts/FirebaseContext';

export function ProductPreview({ _id, name, url, price, cart, type, category, description }) {
    const updateStore = useStoreUpdate()

    return (
        <div className="preview-container">
            <Link className="product-preview" key={_id} to={`/store/` + _id} >

                <h3>{name}</h3>
                <img src={url} alt="" />
                <p>${price}</p>

            </Link>
            <div className="btns">
                <button
                    onClick={async () => {
                        await cart(_id, name, url, price, category, type, description)
                        await updateStore()
                    }}
                >
                    Add To Cart {">"}</button>
            </div>
        </div>
    )
}
