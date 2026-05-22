import ProductCard from './ProductCard'

const ProductsGrid = ({ products = [] }) => {
  return (
    <section className="products-grid">
      <div className="products-grid__list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsGrid
