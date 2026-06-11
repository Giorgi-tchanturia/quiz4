import React, { useEffect } from 'react';

export default function Card() {

    useEffect( () => {
        return () => {
            console.log('waishala domidan');
        }
    })

    return (
        <div style={ {border:"2px solid red"}}>
            <h1>Card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis repudiandae harum tempora quod quaerat culpa esse, numquam ducimus iure voluptates modi eaque autem odio aut dolorem ab repellat unde.</p>
        </div>
    )
}