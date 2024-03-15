import React from 'react';
import { PRODUCTS } from '../products';
import StartProduct from './StartProduct';

function Start() {
  return (
    <div>
        {
            PRODUCTS.map(product => {
                return (
                    <StartProduct product={product}></StartProduct>
                )
            })
        }
    </div>
  )
}

export default Start