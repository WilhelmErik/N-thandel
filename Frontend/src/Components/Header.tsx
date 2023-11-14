import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <Link to={"/products/:13"}> Produkt</Link>
        <p>d</p>
        <Link to={"/"}> Home</Link>
       
      </header>
    </>
  );
}
