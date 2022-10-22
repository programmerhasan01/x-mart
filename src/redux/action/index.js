// for add item to cart
export const addItemToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
// for delete item to cart
export const deleteCartItem = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
