import React from "react";
import { PRODUCTS } from "../products";
import PlanProduct from "./PlanProduct";
import db from "../firebase";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

function Plan() {
  const [enterProduct, setEnterProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [productsSnapshot] = useCollection(db.collection("products"));

  const submitProductHandler = (event) => {
    event.preventDefault();
    db.collection("products").add({
      name: enterProduct,
    });
    setProducts([...products, { name: enterProduct }]);
    setEnterProduct("");
  };


  return (
    <div className="h-screen m-auto">
      <div className="h-1/7 bg-amber-200 p-4">
        <h1 className=" text-4xl">Items of the Week</h1>
      </div>
      <div className="h-4/5 p-3 w-90 m-auto bg-slate-100">
        <div className="grid grid-cols-3 gap-3">
          {productsSnapshot?.docs.map((product) => {
            return <PlanProduct key={product.id} product={product.data().name}></PlanProduct>;
          })}
        </div>
      </div>
      <div className="h-14 w-screen bg-amber-400 ">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") submitProductHandler(e);
          }}
          onChange={(e) => setEnterProduct(e.target.value)}
          value={enterProduct}
          placeholder="Chicken"
          className="p-3 w-80"
        ></input>
      </div>
    </div>
  );
}

export default Plan;
