import React from "react";
import { PRODUCTS } from "../products";
import PlanProduct from "./PlanProduct";
import db from "../firebase";
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { serverTimestamp } from "firebase/firestore";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";
import PRODUCTS_DATA from "../priority";

function Plan() {
  const [enterProduct, setEnterProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [availableProduct, setAvailableProducts] = useState(false);
  const [productsSnapshot] = useCollection(
    db.collection("products").orderBy("timestamp", "asc")
  );

  // Delete unnecessary products from firestore database
  // const [deleteSnapshot] = useCollection(
  //   db.collection("products")
  // );

  // deleteSnapshot?.docs.map((doc) => {
  //   db.collection("products").doc(doc.id).delete();
  // });

  // Update data into firestore firestore database
  // useEffect(() => {
  //   PRODUCTS_DATA.map((product) => {
  //     db.collection("products").add(product);
  //   });
  //   console.log("good");
  // }, []);

  const checkProduct = (productName) => {
    productsSnapshot.docs.map((doc) => {
      if (doc.data().name == productName) {
        setAvailableProducts(true);
      }
    });
    return true;
  };

  const submitProductHandler = () => {
    if (enterProduct.length <= 0) {
      alert("Please enter product name");
    }
    // if (availableProduct)  {
    //   alert("Product already exists");
    // }
    else {
      console.log("bad", enterProduct, "ab");
      db.collection("products").add({
        name: enterProduct,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        priority: 0,
      });
      setProducts([...products, { name: enterProduct }]);
      setEnterProduct("");
    }
  };

  return (
    <div className="h-screen m-auto bg-slate-100">
      <div className="h-1/7 pb-2 pt-6">
        <h1 className="ml-3 text-left font-bold text-4xl">ADD ITEMS</h1>
      </div>
      <div className="h-3/5 pt-5 p-4 w-90 m-auto">
        <div className="grid grid-cols-3 gap-3">
          {productsSnapshot?.docs.map((product) => {
            return (
              <PlanProduct
                key={product.id}
                docId={product.id}
                product={product.data()}
              ></PlanProduct>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center fixed z-99999 bottom-0 bg-gray-300 w-screen ">
        <input
          onChange={(e) => setEnterProduct(e.target.value)}
          value={enterProduct}
          placeholder="Chicken"
          className="p-2 m-2 w-4/5 rounded-md border-2"
        ></input>
        <div
          className="bg-red-300 m-2 p-2 rounded-3xl"
          onClick={submitProductHandler}
        >
          <SendIcon></SendIcon>
        </div>
      </div>
    </div>
  );
}

export default Plan;
