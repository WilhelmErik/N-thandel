import React from "react";
import "./products.css";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { fetchData } from "../utilities/fetchData";

import { ProductsResponseType, ProductType } from "./IProduct";

function Products() {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchData<ProductsResponseType>();
      setProducts(result.data);
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      {products?.map((product) => (
        <div className="product-card">
          <Link to={"./products/" + product.id}>
            {" "}
            <img src={`./src/assets/img/${product.imageURL}`} alt="" />
            <p> {product.name}</p> <p> {product.price}.00 kr</p>{" "}
          </Link>
          {/* <img src={`./src/assets/img/candle1.png${product.imageURL}`} alt="" /> */}
        </div>
      ))}
    </div>
  );
}

Products.propTypes = {};

export default Products;
