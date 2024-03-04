import React, { useState } from 'react';

const Counter = () => {
    const [count, setcount]= useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setcount(newCount)
    }

    const handleSub = () =>{
        const newCount = count - 1;
        setcount(newCount)
    }
    return (
        <div style={{border: '2px solid red'}}>
            <h1>joy</h1>
            <h3 >Counter: {count}</h3>
            <button onClick={handleAdd}>count</button>
            <button onClick={handleSub}>count</button>
        </div>
    );
};

export default Counter;