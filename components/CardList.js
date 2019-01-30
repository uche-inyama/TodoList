import React from 'react';
import { Card } from './Card';


export const CardList = (props)=>{
    return (
        <div>
            {props.list.map(listItem =><Card card={listItem} />)}
        </div>
    )
}


