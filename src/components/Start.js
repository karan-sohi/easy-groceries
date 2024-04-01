import React from 'react';
import { PRODUCTS } from '../products';
import StartProduct from './StartProduct';
import { useCollection } from "react-firebase-hooks/firestore";
import db from '../firebase';

function Start() {
  const [productsSnapshot] = useCollection(db.collection("products").orderBy("priority"));
  return (
    <div>
        {
            productsSnapshot?.docs.map(product => {
              if (product.data().clicked)  {
                return (
                    <StartProduct key={product.id} product={product.data()}></StartProduct>
                )
              }
            })
        }
    </div>
  )
}

export default Start