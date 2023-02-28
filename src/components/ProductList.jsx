import ProductCard from "./ProductCard";

const ProductList = ({ products, handleDecrease, handleIncrease }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.sku}
          product={product}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ))}
    </div>
  );
};

export default ProductList;
