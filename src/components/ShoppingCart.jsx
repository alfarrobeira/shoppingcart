import { getTotalPrice } from "../utils";

const ShoppingCart = ({ cart, handleDecrease, handleIncrease }) => {
  return cart.length ? (
    <>
      {cart.map((product) => (
        <div className="cart-row" key={product.sku}>
          <div className="details">
            <h4>{product.name}</h4>
            Unit price: $ {product.price} | Qty: {product.qty}
          </div>
          <div className="cart-buttons">
            <button onClick={() => handleDecrease(product.sku)}>-</button>
            <span>{parseFloat(product.price * product.qty).toFixed(2)} €</span>
            <button onClick={() => handleIncrease(product.sku)}>+</button>
          </div>
        </div>
      ))}
      <div className="cart-row">
        <h4>Total price: {getTotalPrice({ cart })} €</h4>
      </div>
    </>
  ) : (
    <div className="cart-row">No items in your cart</div>
  );
};

export default ShoppingCart;
