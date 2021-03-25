import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <section className="cart-empty">
        <div className="container">

            <h1>Your cart is empty.
                 Please have a look in our <Link to="/store">store</Link></h1>
        </div>
    </section>
  )
}
