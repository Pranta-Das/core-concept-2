import React, { useEffect, useState } from 'react';
import Use from './Use';

const User = () => {
    const [user, setUser] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> setUser(data))
    } ,[])

   
    return (
        <div>
            <h3>Users: {user.length}</h3>
           {
            user.map( use => <Use
             use={use}></Use>)
           }
        </div>
    );
};

export default User;