import React from 'react';
import Products from '../components/Products';

const Shopping = ({ onAdd }) => {
    return (
        <div>
            <h1>Shopping</h1>
            <Products onAdd={onAdd}/>
        </div>
    );
}

export default Shopping;
