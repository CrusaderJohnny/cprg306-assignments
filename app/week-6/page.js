import React from 'react';
import Items from './item';
import { ItemList, LoadItems } from './item-list';
import Item from './item';

export default function Page() {
    return(
        <div>
            <h1 className='font-bold text-4xl p-2 m-2'>Shopping List</h1>
            <LoadItems />
        </div>        
    );
}