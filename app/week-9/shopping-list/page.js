"use client";
import React, { useState, useEffect } from "react";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import {useRouter} from 'next/navigation';

export default function Page() {
  const {user, firebaseSignOut} = useUserAuth();
  const router = useRouter();
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
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push('/');
    } catch (error) {
      console.error('Firebase sing - out Error:', error);
    }
  };
  useEffect(() => {
    if (!user) {
        router.push('/week-9');
    }
}, [user, router]);
  return (
    <div className="w-full pr-4 pl-4">
      <div className="flex flex-row">
        <div>
          <h1 className="font-bold text-4xl p-2 m-2">Shopping List</h1>
          <NewItem onAddItem={itemHandler} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName}/>
        </div>
        <div className="ml-auto flex items-start">
          <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
