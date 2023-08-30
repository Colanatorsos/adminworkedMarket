import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/reducers/cartSlice";

const Cart = React.memo(() => {
    const productsInCart = useSelector((s) => s.cart.products);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalQuantity = Object.values(productsInCart).reduce(
        (total, product) => total + (product.quantity || 0),
        0
    );

    return (
        <div>
            <h2 style={{ fontSize: '30px' }} className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900' >Корзина</h2>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <button className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClearCart}>Очистить корзину</button>
            </div>
            <br />
            <br />
            <div className="row">
                {Object.values(productsInCart).map((product, idx) => (
                    <Card key={idx} el={product} />
                ))}
            </div>
        </div>
    );
});

export default Cart;
