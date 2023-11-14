import React from "react";
import { useParams } from "react-router-dom";
export default function ProductPage() {
  const param = useParams();
  return (
    <div>
      Product <span>{param.id}</span>
    </div>
  );
}
