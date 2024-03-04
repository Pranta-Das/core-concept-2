import React, { useEffect, useState } from 'react';
import Main from './Main';

const Mains = () => {
    const [friends, setFriends]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => <Main friend={friend} key={friend.id}></Main>)
            }
        </div>
    );
};

export default Mains;