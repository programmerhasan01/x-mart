import React from "react";
import { NavLink, useHref, useNavigate } from "react-router-dom";

function ShowProducts({ filteredProducts, data, setFilteredProducts }) {
  const ref = useHref();
  const navigate = useNavigate();
  console.log(ref);
  const showProductDetails = (id) => {
    const url = ref === "/" ? `/products/${id}` : `/products/${id}`;
    navigate(url);
  };
  const filterProduct = (category) => {
    const updatedProducts = data.filter(
      (product) => product.category === category
    );
    setFilteredProducts(updatedProducts);
  };
  return (
    <div className="products-container">
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilteredProducts(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronic
        </button>
      </div>
      <div className="products row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 my-2" key={product.id}>
            <div className="card h-100 text-center py-4">
              <img
                src={product.image}
                className="card-img-top"
                alt="..."
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.slice(0, 12)}...
                </h5>
                <p className="card-text fw-bold">${product.price}</p>
                <button
                  onClick={() => showProductDetails(product.id)}
                  className="btn btn-outline-dark"
                >
                  Buy-Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProducts;
