import React from 'react';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import db from '../firebase';
import EditIcon from '@mui/icons-material/Edit';
import { useCollection } from "react-firebase-hooks/firestore";


function PlanProduct({product, docId}) {
  const [clicked, changeClicked] = useState(false);
  // const deleteProduct = () => {
  //   db.collection("products").doc(docId).delete();
  // }

  const selectProduct = () => {
    db.collection("products").doc(docId).update({
      clicked: !product.clicked
    })
    changeClicked(!clicked);
  }

  let productClicked = "flex justify-around rounded-md bg-red-300 py-1"
  let productNotClicked = "flex justify-around rounded-md bg-white z-100 py-1"
  return (
    <div className={product.clicked ? productClicked : productNotClicked} onClick={selectProduct}>
      <div>
        <h1>{product.name}</h1>
      </div>
      {/* <div>
        <ClearIcon></ClearIcon>
        <EditIcon></EditIcon>
      </div> */}
    </div>
  )
}

export default PlanProduct