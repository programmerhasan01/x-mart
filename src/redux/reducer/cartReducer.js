const cart = [];

const cartReducer = (state = cart, action) => {
  const { type } = action;
  const product = action.payload;
  switch (type) {
    case "ADDITEM":
      // check product exist or not
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        // increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETEITEM":
      const existItem = state.find((item) => item.id === product.id);
      if (existItem.qty === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartReducer;
