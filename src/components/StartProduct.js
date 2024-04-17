import React from 'react';
import { useState } from 'react';

function StartProduct({product}) {
  const [isSelected, select] = useState(false);

  let selectStyle = "px-2 m-7 rounded-xl w-64 mx-auto items-center bg-cyan-300 shadow-lg shadow-cyan-500/30";
  let unSelectStyle = "px-2 m-7 rounded-xl w-64 mx-auto items-center bg-white shadow-lg shadow-slate-500/20";

  let currentStyle = isSelected ? selectStyle : unSelectStyle; 

  const selectProduct = () => {
    select(!isSelected);
  } 
  return (
    <div className={currentStyle}>
    <div onClick={selectProduct} className="p-2">
        {product.name}
    </div>
    </div>
  )
}

export default StartProduct