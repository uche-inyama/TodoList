import React from 'react'

export const Card = (props) => {
    return (
        <div style = {{Margin: '1em'}}>

        <div style = {{fontSize: '1.25em', fontWeight: 'bold'}}>{props.card}</div>
        
        </div>
    )
}