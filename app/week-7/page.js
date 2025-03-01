"use client";
import React, { useState } from "react";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const itemHandler = (newItem) => {
    console.log('Before add:', items);
    setItems((prevItems) => [...prevItems, newItem]);
    console.log('After add:', items);
  };

  return (
    <div className="flex flex-row">
      <div>
        <h1 className="font-bold text-4xl p-2 m-2">Shopping List</h1>
        <ItemList items={items} />
      </div>
      <div>
        <NewItem onAddItem={itemHandler} />
      </div>
    </div>
  );
}
