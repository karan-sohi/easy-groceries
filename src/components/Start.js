import React from "react";
import { PRODUCTS } from "../products";
import StartProduct from "./StartProduct";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../firebase";

function Start() {

  const [productSelected, setProductSelected] = useState(false)

  const [productsSnapshot] = useCollection(
    db.collection("products").orderBy("priority")
  );

  // useEffect( () => {
  //    setProductSelected(!productSelected);
  // }, [productSelected])

  const resetSelection = () => {
    setProductSelected(!productSelected);
  };

  return (
    <div>
      <div className="bg-red-300 p-7 text-start font-bold text-2xl">
        <h1>Welcome Bro!</h1>
      </div>
      <div className=" py-2 pb-10 bg-slate-100">
        {productsSnapshot?.docs.map((product) => {
          if (product.data().clicked) {
            return (
              <StartProduct
                key={product.id}
                product={product.data()}
                selectedStyle = {productSelected}
              ></StartProduct>
            );
          }
        })}
        <button
          className="bg-red-300 p-2 rounded-lg w-80 m-auto"
          onClick={resetSelection}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Start;
