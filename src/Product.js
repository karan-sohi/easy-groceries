import React from 'react'

function Product({product}) {
  return (
    <div className="flex justify-around px-2 m-4 rounded-xl items-center bg-cyan-500 ">
    <div className="p-5 flex ">
        {product.name}
    </div>
    <div className="flex items-center">
        <button className='p-3 bg-gray-400'>-</button>
        <input className="p-1 w-5" value={product.quantity}></input>
        <button className="p-2 bg-gray-400">+</button>
    </div>
    </div>
  )
}

export default Product