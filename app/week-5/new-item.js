"use client";
import { useState } from "react";

export default function NewItemList() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(0);
    setCategory("produce");
  };
  return (
    <div className="container mx-auto p-4">
      {" "}
      {/* Container for centering and padding */}
      <h2 className="text-2xl font-bold mb-4">Add Item</h2> {/* Title */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {" "}
        {/* Form styling */}
        <div className="mb-4">
          {" "}
          {/* Name input group */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <NewItem />
        </div>
        <div className="mb-6">
          {" "}
          {/* Category select group */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          {" "}
          {/* Submit button container */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function NewItem() {
  const [quantity, setQuantity] = useState(0);
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
    <div className="flex justify-center items-center ">
      <span className="text-lg font-semibold pr-4 text-black">{quantity}</span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold p-4 px-6 rounded disabled:opacity-50"
      >
        -
      </button>
      <div className="p-2">

      </div>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 px-6 rounded disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
}
