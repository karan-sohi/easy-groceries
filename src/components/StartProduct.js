import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function StartProduct({product, selectedStyle}) {

  const [isSelected, select] = useState(selectedStyle);

  const selectStyle = "px-2 m-7 rounded-xl w-64 mx-auto items-center bg-cyan-300 shadow-lg shadow-cyan-500/30";
  const unSelectStyle = "px-2 m-7 rounded-xl w-64 mx-auto items-center bg-white shadow-lg shadow-slate-500/20";

  const changeSelection = () => {
    select(!isSelected);
  }

  useEffect(() => {
    console.log("REsetted")
    select(selectedStyle);
  }, [selectedStyle]);

  return (
    <div className ={isSelected ? selectStyle : unSelectStyle}>
      {console.log("changing", selectedStyle)}
    <div onClick={changeSelection} className="p-2">
        {product.name}
    </div>
    </div>
  )
}

export default StartProduct