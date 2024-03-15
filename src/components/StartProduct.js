import React from 'react';
import { useState } from 'react';

function StartProduct({product}) {
  const [isSelected, select] = useState(false);

  let selectStyle = "px-2 m-4 rounded-xl items-center bg-cyan-500";
  let unSelectStyle = "px-2 m-4 rounded-xl items-center bg-white";

  let currentStyle = isSelected ? selectStyle : unSelectStyle; 

  const selectProduct = () => {
    select(!isSelected);
  }
  return (
    <div className={currentStyle}>
    <div onClick={selectProduct} className="p-4">
        {product.name}
    </div>
    </div>
  )
}

export default StartProduct