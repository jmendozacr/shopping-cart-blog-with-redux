import React from 'react';
import Products from '../components/Products';

const Shopping = ({ products, onAdd }) => {
    return (
        <div>
            <h1>Shopping</h1>
            <Products products={products} onAdd={onAdd}/>
        </div>
    );
}

export default Shopping;
