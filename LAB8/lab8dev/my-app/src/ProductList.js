import React from "react";

export default function ProductList({ products, onRemove }) {
  console.log("ProductList zrenderowany");

  return (
    <ul>
      {products.map((product) => (
        <li key={product}>
          {product}{" "}
          <button onClick={() => onRemove(product)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
}
