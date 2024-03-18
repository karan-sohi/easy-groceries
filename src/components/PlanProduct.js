import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import db from '../firebase';

function PlanProduct({product, docId}) {
  const deleteProduct = () => {
    db.collection("products").doc(docId).delete();
  }
  return (
    <div className="flex justify-around bg-red-300 ">
      <div>
        <h1>{product.name}</h1>
      </div>
      <div onClick={deleteProduct}>
        <ClearIcon></ClearIcon>
      </div>
    </div>
  )
}

export default PlanProduct