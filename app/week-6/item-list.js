"use client";
import React, { useState, useEffect } from 'react';
import Items from "./item";
import data from "./items.json" assert { type: 'json'};


export function LoadItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./items.json', {with: {type:"json"},}); 
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Items</h1>
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} /> 
        ))}
      </ul>
    </div>
  );
}

// export function ItemList() {
//           return (
//             <>
//             <Items 
//             name={item1.name}
//             quantity={item1.quantity}
//             category={item1.category}/>
//             <Items 
//             name={item2.name}
//             quantity={item2.quantity}
//             category={item2.category}/>
//             <Items 
//             name={item3.name}
//             quantity={item3.quantity}
//             category={item3.category}/>
//             <Items 
//             name={item4.name}
//             quantity={item4.quantity}
//             category={item4.category}/>
//             <Items 
//             name={item5.name}
//             quantity={item5.quantity}
//             category={item5.category}/>
//             <Items 
//             name={item6.name}
//             quantity={item6.quantity}
//             category={item6.category}/>
//             <Items 
//             name={item7.name}
//             quantity={item7.quantity}
//             category={item7.category}/>
//             <Items 
//             name={item8.name}
//             quantity={item8.quantity}
//             category={item8.category}/>
//             <Items 
//             name={item9.name}
//             quantity={item9.quantity}
//             category={item9.category}/>
//             <Items 
//             name={item10.name}
//             quantity={item10.quantity}
//             category={item10.category}/>
//             <Items 
//             name={item11.name}
//             quantity={item11.quantity}
//             category={item11.category}/>
//             <Items 
//             name={item12.name}
//             quantity={item12.quantity}
//             category={item12.category}/>
//             </>
//           );
// }