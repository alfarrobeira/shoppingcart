import { useState } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";

const Eshop = () => {
  const [products, setProducts] = useState([
    {
      sku: 1,
      stock: 10,
      name: "iPhone 14 Pro Max",
      img:
        "https://www.interdiscount.ch/static-shops/products/720/846c8cebca69a34241dcb5d952727756e6cb.jpg",
      price: 1500
    },
    {
      sku: 2,
      stock: 10,
      name: "Macbook Air",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      price: 1200
    },
    {
      sku: 3,
      stock: 10,
      name: "iPad Pro",
      img:
        "https://d1eh9yux7w8iql.cloudfront.net/product_images/338084_7fcba852-8e68-44da-97d1-a10b74a1349f.jpg",
      price: 1300
    }
  ]);
  const [cart, setCart] = useState([
    {
      sku: 1,
      qty: 2,
      name: "iPhone 14 Pro Max",
      price: 1500
    },
    {
      sku: 3,
      qty: 1,
      name: "iPad Pro",
      price: 1300
    }
  ]);

  // decrease product with specified sku
  const handleItemDecrease = (productSku) => {
    decreaseCartItem(productSku);
    increaseStockItem(productSku);
  };

  // increase product with specified sku
  const handleItemIncrease = (productSku) => {
    increaseCartItem(productSku);
    decreaseStockItem(productSku);
  };

  const decreaseStockItem = (productSku) => {
    const newProducts = products.map((product) =>
      product.sku === productSku && product.stock > 0
        ? { ...product, stock: product.stock - 1 }
        : product
    );
    setProducts(newProducts);
  };

  const increaseStockItem = (productSku) => {
    const newProducts = products.map((product) =>
      product.sku === productSku
        ? { ...product, stock: product.stock + 1 }
        : product
    );
    setProducts(newProducts);
  };

  // helper function to decrease the spec product in the cart
  const decreaseCartItem = (productSku) => {
    let newCart = [];
    const found = cart.find((item) => item.sku === productSku);
    if (!found) return;

    // check item quantity
    // remove, if last item
    if (found?.qty === 1) {
      newCart = Array.from(cart);
      newCart.splice(cart.indexOf(found), 1);
    } else {
      // items > 1 -> decrease existing cart item
      // create new - modified - object array
      newCart = cart.map((cartItem) => {
        return cartItem.sku === productSku && cartItem.qty > 0
          ? // destructure object and set qty
            { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem;
      });
    }
    setCart(newCart);
  };

  // helper function to increase the spec product in the cart
  const increaseCartItem = (productSku) => {
    let newCart = [];
    // check whether item is already in cart
    const found = cart.find((item) => item.sku === productSku);
    // yes -> increase existing cart item
    if (found) {
      // create new - modified - object array
      newCart = cart.map((cartItem) =>
        cartItem.sku === productSku && getStock(productSku) > 0
          ? // destructure object and set qty
            { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
    } else {
      // no -> add new item to cart
      const product = getProduct(productSku);
      newCart = Array.from(cart);
      newCart.push({
        sku: product.sku,
        qty: 1,
        name: product.name,
        price: product.price
      });
    }
    setCart(newCart);
  };

  // helper function to get product with specified sku
  const getProduct = (productSku) => {
    return products.find((product) => product.sku === productSku);
  };

  // helper function to check stock for product
  const getStock = (productSku) => {
    return getProduct(productSku).stock;
  };

  return (
    <>
      <Header cart={cart} />
      <ProductList
        products={products}
        cart={cart}
        handleDecrease={handleItemDecrease}
        handleIncrease={handleItemIncrease}
      />
      <hr />
      <ShoppingCart
        cart={cart}
        handleDecrease={handleItemDecrease}
        handleIncrease={handleItemIncrease}
      />
    </>
  );
};

export default Eshop;
