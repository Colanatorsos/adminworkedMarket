import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Auth from '../pages/Auth';
import Admin from '../pages/Admin';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const prods = useSelector((s) => s.cart.products);

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            <header>
                <div className="container">
                    <div className="nav">

                        {isAuthenticated ? (
                            <>
                                <Link className='cart-item' to="/">Главная</Link>
                                <Link to="/cart" className="cart-item">
                                    <span className="cart-counter">{prods.length}</span>
                                    <span>Корзина</span>
                                </Link>
                                <Link to="/admin" className="cart-item">
                                    Админ
                                </Link>
                                <button onClick={handleLogout} className="cart-item">
                                    Выйти
                                </button>
                            </>
                        ) : (
                            <Link to="/auth" className="cart-item">
                                <button
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Логин
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
                {isAuthenticated ? (
                    <Route path="/admin" element={<Admin />} />
                ) : (
                    <Route path="/admin" element={<Navigate to="/auth" />} />
                )}
            </Routes>
        </div>
    );
};

export default App;
