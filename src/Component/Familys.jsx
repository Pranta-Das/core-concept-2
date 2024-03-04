import React, { useEffect, useState } from 'react';
import Family from './Family';

const Familys = () => {
    const [familys, setFamilys] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFamilys(data))
    },[])
    return (
        <div>
            <h1>Total user: {familys.length}</h1>

           {
             familys.map(family => <Family family={family} key={family.id}></Family>)
           }
        </div>
    );
};

export default Familys;