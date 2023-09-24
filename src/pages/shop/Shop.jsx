import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Aguud</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
