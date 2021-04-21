import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Products = ({ products, onAdd }) => {
    return (
        <div>
            <h3>Product List</h3>
            <ContainerProducts>
                {
                    products.map((item, i) => {
                        return(
                            <Product key={item.id}>
                                <p>{item.name}</p>
                                <Button onClick={() => onAdd(item)}>Add to cart</Button>
                            </Product>
                        )
                    })
                }
            </ContainerProducts>
        </div>
    );
}

const ContainerProducts = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
`;

const Product = styled.div`
    border-radius: 5px;
    border: 1px solid #ebeef3;
    padding: 20px;
    text-align: center;

    p {
        margin-bottom: 10px;
        font-weight: bold
    }
`;

const Button = styled.button`
    background: #1c85e8;
    border-radius: 3px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    padding: 10px 20px;
    text-align: center;
    transition: .3s ease all;
    width: 100%;

    &:hover {
        background: #1c6ab9;
    }
`;

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);
