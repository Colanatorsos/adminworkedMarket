import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //--------------
    const [errorMessage, setErrorMessage] = useState('');
    //--------------
    const navigate = useNavigate();

    const handleAuth = () => {
        if (username === 'Админ' && password === 'Пароль') {
            setIsAuthenticated(true);
            navigate('/admin');
        } else {
            setErrorMessage('Неправильный логин или пароль');
        }
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h2>Авторизация</h2>
            <div>
                <input
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleAuth}>Войти</button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>
    );
}

export default Auth;
