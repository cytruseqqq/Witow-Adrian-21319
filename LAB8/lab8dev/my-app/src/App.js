import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import ProductList from "./ProductList";

export default function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

  const onLog = useCallback(() => {
    console.log("Licznik:", count);
  }, [count]);

  const removeProduct = useCallback((item) => {
    setProducts((prev) => prev.filter((p) => p !== item));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React render test</p>

        <button onClick={() => console.log("Kliknięto przycisk!")}>
          Kliknij mnie
        </button>

        <button onClick={() => setCount((c) => c + 1)}>
          Zwiększ: {count}
        </button>

        <Counter onLog={onLog} />

        <h3>Produkty:</h3>
        <ProductList products={products} onRemove={removeProduct} />
      </header>
    </div>
  );
}
