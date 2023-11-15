import React from "react";
import { useContext } from "react";
import { CartContext } from "../Components/CartContext";
export default function CartPage() {
  const { cart ,setCart} = useContext(CartContext);
  console.log(cart.length);
  const totalPrice = cart.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );

  console.log("THis is the total price : ", totalPrice);
  return (
    <div>
      <h2>Here be your items </h2>
      {cart.map((product) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between",padding:"20px",border:"1px white inset" }}>
            <img src={`../src/assets/img/${product?.imageURL}`} alt="" height={100}/>
            <p>Item: {product.name}</p>

            <p>Price: {product.price}.00 kr</p>
          </div>
        );
      })}
      <p>Total :{totalPrice}.00 kr</p>
      <button onClick={()=>setCart([])}>Clear Cart</button>
    </div>
  );
}
