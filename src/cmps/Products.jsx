import React from 'react'
import { ProductPreview } from './ProductPreview';

const Products = ({ products, loading, cart }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="products">
      { products &&
        products.map(product => {
          const { _id, name, url, price, category, type, description } = product
          return (
            <ProductPreview
              cart={cart}
              key={_id} _id={_id} name={name} url={url} price={price}
              category={category} type={type} description={description}
            />
          )
        })
      }
    </section>
  )
}

export default Products
