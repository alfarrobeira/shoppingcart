export const getTotalPrice = ({ cart }) => {
    let total = 0;
    cart.forEach((item) => (total += item.qty * item.price));
  
    return total.toFixed(2);
  };
  
  export const getTotalItems = ({ cart }) => {
    let total = 0;
    cart.forEach((item) => (total += item.qty));
  
    return total;
  };
  