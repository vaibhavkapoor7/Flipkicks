import React from 'react'

const ProductCard = ({ product = {} }) => {
  return (
    <article className="product-card">
      <div className="product-card__image" />
      <div className="product-card__details">
        <h3>{product.name || 'Product Name'}</h3>
        <p>{product.price || '$0.00'}</p>
      </div>
    </article>
  )
}

export default ProductCard
