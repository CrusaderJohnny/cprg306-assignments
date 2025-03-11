"use client";
import React, { useState } from "react";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    const parts = itemName.split(',');
    let mrCleaned = parts[0];  
    mrCleaned = mrCleaned.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji}/gu, '').trim();
    const hyphenatedName = mrCleaned.replace(/\s+/g, '-').replace(/-+$/, '');
    setSelectedItemName(hyphenatedName);
  };

  const itemHandler = (newItem) => {
    console.log('Before add:', items);
    setItems((prevItems) => [...prevItems, newItem]);
    console.log('After add:', items);
  };

  return (
    <div className="flex flex-row">
      <div>
        <h1 className="font-bold text-4xl p-2 m-2">Shopping List</h1>
        <NewItem onAddItem={itemHandler} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName}/>
      </div>
    </div>
  );
}
