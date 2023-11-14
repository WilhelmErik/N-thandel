import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../Components/ProductDetail";
export default function ProductPage() {
  const param = useParams();
  return (
    <div>
      <ProductDetail />
      Product <span>{param.id}</span>
    </div>
  );
}
