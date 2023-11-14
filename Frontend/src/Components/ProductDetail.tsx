import React, { useEffect, useState } from "react";
import { ProductDetailsType, ProductResponseType } from "./IProduct";
import { fetchData } from "../utilities/fetchData";
import { useParams } from "react-router-dom";
import "./productDetail.css";
export default function ProductDetail() {
  const { id } = useParams();
  console.log(id, " Wtf params");
  const [product, setProduct] = useState<ProductDetailsType>();
  useEffect(() => {
    const getProduct = async () => {
      const result = await fetchData<ProductResponseType>(+id!);
      console.log(result);
      console.log(result.data);
      setProduct(result.data);
    };
    getProduct();
  }, []);

  console.log(product);
  console.log("Wtf");
  return (
    <div className="product-detail">
      <div> Image</div>
      <div>
        Info <p>{product ? product.name : "Hello"}</p>
        <p>{product ? product.stock : "Stock"}</p>
        <p>{product ? product.weight : "Weight"}</p>
      </div>
      <div>
        Description <p>{product ? product.description : "Description"}</p>
      </div>
     
    </div>
  );
}
