"use client";
import { useState } from "react";

function NewItem() {
    const [quantity, setQuantity] = useState(1)
    const increment = () => {
        if (quantity < 20) {
          setQuantity(quantity + 1); 
        }
    };
    const decrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1); 
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen">
          <span className="text-lg font-semibold pr-4">{quantity}</span>
          <button onClick={decrement} disabled={quantity === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold p-2 px-4 rounded disabled:opacity-50">-</button> 
          <button onClick={increment} disabled={quantity === 20} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded disabled:opacity-50">+</button> 
        </div>
      );
}

export default NewItem;