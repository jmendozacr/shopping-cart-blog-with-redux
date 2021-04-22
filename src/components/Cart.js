import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>
            {
                cart.length > 0 ? 
                    cart.map(item => {
                        return(
                            <Product key={item.id}>
                                <ProductName>
                                    {item.name}
                                </ProductName>
                                Quantity: {item.quantity}
                            </Product>
                        )
                    })
                :
                    <p>No items added.</p>
            }
        </div>
    );
}

const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const ProductName = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
