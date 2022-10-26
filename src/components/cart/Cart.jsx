import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItemToCart, deleteCartItem } from "../../redux/action";

function Cart() {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItemToCart(product));
  };
  const deleteProduct = (product) => {
    dispatch(deleteCartItem(product));
  };
  return (
    <div>
      <h2 className="text-center fw-bold display-6 my-4">
        {state.length ? "Your Products" : "No Product is Selected"}
      </h2>
      {state.map((item) => (
        <div className="row mx-auto py-5" style={{ width: "60%" }}>
          <div className="col-md-6">
            <img
              src={item.image}
              alt=""
              height={250}
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{item.title}</h2>
            <h3 className="py-3">
              ${item.qty} X ${item.price} = ${item.qty * item.price}
            </h3>
            <button
              className="btn btn-outline-dark fw-bold"
              onClick={() => addProduct(item)}
            >
              +
            </button>
            <button
              className="btn btn-outline-dark ms-2 fw-bold"
              onClick={() => deleteProduct(item)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
