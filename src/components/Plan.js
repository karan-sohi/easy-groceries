import React from "react";
import { PRODUCTS } from "../products";
import PlanProduct from "./PlanProduct";
import db from "../firebase";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { serverTimestamp } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import SendIcon from '@mui/icons-material/Send';

function Plan() {
  const [enterProduct, setEnterProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [productsSnapshot] = useCollection(db.collection("products").orderBy("timestamp", "asc"));

  const submitProductHandler = (event) => {
    event.preventDefault();
    db.collection("products").add({
      name: enterProduct,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      priority: 0,
    });
    setProducts([...products, { name: enterProduct }]);
    setEnterProduct("");
  };


  return (
    <div className="h-screen m-auto bg-slate-100">
      <div className="h-1/7 pb-2 pt-6">
        <h1 className="ml-3 text-left font-bold text-4xl">ADD ITEMS</h1>
      </div>
      <div className="h-3/5 pt-5 p-4 w-90 m-auto">
        <div className="grid grid-cols-3 gap-3">
          {productsSnapshot?.docs.map((product) => {
            return <PlanProduct key={product.id} docId={product.id} product={product.data()}></PlanProduct>;
          })}
        </div>
      </div>
      <div className="flex justify-center p-2 bg-white w-screen ">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") submitProductHandler(e);
          }}
          onChange={(e) => setEnterProduct(e.target.value)}
          value={enterProduct}
          placeholder="Chicken"
          className="p-3 m-2 w-4/5 border-2"
        ></input>
        <div className="bg-red-300 m-2 justify-center">
        <SendIcon ></SendIcon>
        </div>
      
      </div>
    </div>
  );
}

export default Plan;
