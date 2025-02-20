import React from 'react';
import Item from './item';
import { ItemList } from './item-list';

export default function Page() {
    return(
        <div>
            <h1 className='font-bold text-4xl p-2 m-2'>Shopping List</h1>
            <ItemList/>
        </div>        
    );
}