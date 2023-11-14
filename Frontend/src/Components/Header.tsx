import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <Link to={"/products/:13"}> Produkt</Link>
        <p>d</p>
        <Link to={"/"}> Home</Link>
        <div>Header</div>
        <h2>Hello</h2>
      </header>
    </>
  );
}
