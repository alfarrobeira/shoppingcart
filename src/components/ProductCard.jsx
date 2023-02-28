const ProductCard = ({ product, handleDecrease, handleIncrease }) => {
    return (
      <div className="product-card">
        <div className="img-container">
          <img src={product.img} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <div className="card-buttons">
          <button onClick={() => handleDecrease(product.sku)}>-</button>
          <div>{parseFloat(product.price).toFixed(2)} €</div>
          <button onClick={() => handleIncrease(product.sku)}>+</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  