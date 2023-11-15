import React, { useEffect, useState } from "react";
import { ProductDetailsType, ProductResponseType } from "./IProduct";
import { fetchData } from "../utilities/fetchData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./productDetail.css";
export default function ProductDetail() {
  //--
  const { setCart } = useContext(CartContext);
  //--
  const { id } = useParams();

  const [product, setProduct] = useState<ProductDetailsType>();
  useEffect(() => {
    const getProduct = async () => {
      const result = await fetchData<ProductResponseType>(+id!);

      setProduct(result.data);
    };
    getProduct();
  }, []);

  // const addProduct = () => {
  //   if (product) {
  //     setCart((pCart: []) => [...pCart, product]);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // };
  const addProduct = () => {
    if (product) {
      setCart((prevCart:[]) => {
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  };
  return (
    <div className="product-detail">
      <div>
        {" "}
        <img
          src={`../src/assets/img/${product?.imageURL}`}
          alt=""
          width={300}
        />
      </div>
      <div>
        <p>Name: {product?.name}</p>
        <p>Price: {product?.price}.00 kr</p>
        <p>Stock: {product?.stock}</p>
        <p>Weight: {product?.weight}</p>
        <button onClick={addProduct}>Add to Cart</button>
      </div>
      <div>
        <h3>Description </h3>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}
