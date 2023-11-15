import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./header.css";
type HeaderType = {
  title: string;
};
export default function Header({ title }: HeaderType) {
  const { cart } = useContext(CartContext);
  console.log(cart.length);
  return (
    <>
      <header>
        <Link to={"/"}> Home</Link>
        <h3>{title}</h3>
        {/* <Link to={"/products/:13"}> Produkt</Link>
        <p>d</p> */}

        <Link to={"/cart"}> Cart: {cart.length} item(s)</Link>
      </header>
    </>
  );
}
