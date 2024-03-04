import React from 'react';

const Family = ({family}) => {

    const {name, email}=family;
    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    );
};

export default Family;