import './card.styles.css';
import React from 'react';

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h1 key={props.monster.id}>{props.monster.name}</h1>
            <h2 key={props.monster.id}>{props.monster.email}</h2>
        </div>
    )
}