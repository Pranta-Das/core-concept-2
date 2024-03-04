import React from 'react';

const Main = ({friend}) => {
    const {name, email}= friend;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h2>E-mail; {email}</h2>
        </div>
    );
};

export default Main;