import Loading from "../loading/Loading";
import ShowProducts from "../showProducts/ShowProducts";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";

function Products() {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilteredProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="fw-bold text-center">Latest Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts
              filteredProducts={filteredProducts}
              data={data}
              setFilteredProducts={setFilteredProducts}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
