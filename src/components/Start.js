import React from 'react';
import { PRODUCTS } from '../products';
import StartProduct from './StartProduct';
import { useCollection } from "react-firebase-hooks/firestore";
import db from '../firebase';

function Start() {
  const [productsSnapshot] = useCollection(db.collection("products"));
  return (
    <div>
        {
            productsSnapshot?.docs.map(product => {
                return (
                    <StartProduct key={product.id} product={product.data()}></StartProduct>
                )
            })
        }
    </div>
  )
}

export default Start