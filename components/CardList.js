import React from 'react';
import { Card } from './Card';

export const CardList = (props)=>{
    return (
        <div>
            { props.list.forEach(function(cards) {
                
                return  <Card card={props.cards} />
            })}
        </div>
    )
}

