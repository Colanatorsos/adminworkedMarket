import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const Cart = () => {
    const prod = useSelector((s) => s.cart.products);

    return (
        <div>
            <h3>Корзина</h3>
            <div className="row">
                {prod.map((el, idx) => (
                    <Card key={idx} el={el} />
                ))}
            </div>
        </div>
    );
}

export default Cart;
