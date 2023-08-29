import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import '../pages/Auth.css'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const prods = useSelector((s) => s.cart.products);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <div style={{ marginBottom: '100px' }} className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only"></span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </Link>
            </div>
            <div className="ml-10 space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/cart" id="side1"
                    className="text-base font-medium text-white hover:text-indigo-50 cart-item">
                    Корзина <span className="cart-counter">{prods.length}</span>
                  </Link>
                  <Link
                    to="/admin"
                    className="text-base font-medium text-white hover:text-indigo-50 cart-item">
                    Админ
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 cart-item"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 cart-item" >
                  Логин
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/auth"
          element={<Auth setIsAuthenticated={setIsAuthenticated} />}
        />
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