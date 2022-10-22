import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../../redux/action";

function ProductDetails({ product }) {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItemToCart(product));
  };
  const { image, title, description, category, rating, price } = product;
  return (
    <div className="row py-5">
      <div className="col-md-6">
        <img src={image} alt={title} height={400} />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{category}</h4>
        <h1 className="display-5">{title}</h1>
        <p className="lead fw-bolder fs-4">
          Ratting {rating && rating.rate}
          <i className="fa fa-star"></i>
          <span className="display-6 fw-bold my-4"> $ {price}</span>
        </p>
        <p className="lead">{description}</p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addProduct(product)}
        >
          AddToCart
        </button>
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </NavLink>
      </div>
    </div>
  );
}

export default ProductDetails;
