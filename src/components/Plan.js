import React from "react";
import { PRODUCTS } from "../products";
import PlanProduct from "./PlanProduct";
import db from "../firebase";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { serverTimestamp } from 'firebase/firestore';
import firebase from "firebase/compat/app";

function Plan() {
  const [enterProduct, setEnterProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [productsSnapshot] = useCollection(db.collection("products").orderBy("timestamp", "asc"));

  const submitProductHandler = (event) => {
    event.preventDefault();
    db.collection("products").add({
      name: enterProduct,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setProducts([...products, { name: enterProduct }]);
    setEnterProduct("");
  };


  return (
    <div className="h-screen m-auto bg-slate-100">
      <div className="h-1/7 pb-2 pt-6">
        <h1 className="ml-3 text-left font-bold text-4xl">ADD ITEMS</h1>
      </div>
      <div className="h-4/5 pt-5 p-4 w-90 m-auto">
        <div className="grid grid-cols-3 gap-3">
          {productsSnapshot?.docs.map((product) => {
            return <PlanProduct key={product.id} docId={product.id} product={product.data()}></PlanProduct>;
          })}
        </div>
      </div>
      <div className="h-30 p-4 bg-white w-screen ">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") submitProductHandler(e);
          }}
          onChange={(e) => setEnterProduct(e.target.value)}
          value={enterProduct}
          placeholder="Chicken"
          className="p-3 w-4/5 border-2"
        ></input>
      
      </div>
    </div>
  );
}

export default Plan;
