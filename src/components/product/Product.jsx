import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import ProductDetails from "../productDetails/ProductDetails";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ProductDetails product={product} />}
        </div>
      </div>
    </div>
  );
}

export default Product;
