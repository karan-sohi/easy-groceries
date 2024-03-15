import React from 'react';
import { PRODUCTS } from '../products';
import PlanProduct from './PlanProduct';

function Plan() {
  return (
    <div className="h-screen m-auto">
        <div className="h-1/7 bg-amber-200 p-4">
        <h1 className=" text-4xl">Items of the Week</h1>
        </div>
        <div className="h-4/5 p-3 w-90 m-auto">
        <div className="grid grid-cols-3 gap-3">
        {
            PRODUCTS.map(product => {
                return <PlanProduct product={product}></PlanProduct>
            })
        }
        </div>
        </div>
        <div className="bg-amber-400">
            <input placeholder="Chicken" className="p-3 w-80"></input>
        </div>
    </div>
  )
}

export default Plan