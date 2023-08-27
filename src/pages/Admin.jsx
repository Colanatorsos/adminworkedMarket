import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../store/reducers/itemsSlice';
/* 
import { addToShop } from '../store/reducers/adminSlice';
import { useDispatch } from 'react-redux';
 */

const Admin = () => {
    const initialItemState = {
        title: '',
        price: '',
        desc: '',
        url: ''
    };

    const [item, setItem] = useState(initialItemState);
    const [itemList, setItemList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     dispatch(addItem(item));
    //     setItem(initialItemState);
    // };
    
    // const handleDeleteItem = (idx) => {
    //     dispatch(deleteItem(idx));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        setItemList(prevItemList => [...prevItemList, item]);
        dispatch(addItem(item));
        setItem(initialItemState);
    };

    const handleDeleteItem = (idx) => {
        const updatedList = itemList.filter((item, i) => i !== idx);
        setItemList(updatedList);
        dispatch(deleteItem(idx));
    };

    return (
        <div>
            <h2>Админ Панель</h2>
            <section className='Adding'>
                <h3>Добавить товар</h3>
            
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={item.title}
                        onChange={handleInputChange}
                        required
                        placeholder='Название'
                    />
                    <input
                        type="text"
                        name="price"
                        value={item.price}
                        onChange={handleInputChange}
                        required
                        placeholder='Цена'
                    />
                    <br />
                    <input
                        type="text"
                        name="desc"
                        value={item.desc}
                        onChange={handleInputChange}
                        required
                        placeholder='Описание'
                    />
                    <input
                        type="text"
                        name="url"
                        value={item.url}
                        onChange={handleInputChange}
                        required
                        placeholder='URL-Картинки'
                    />
                    <br />
                    <button type="submit">Добавить</button>
                    {/* onClick={() => dispatch(addToShop(item))} */}
                </form>
            </section>

            <hr />
            <section className='Editing'>
                <h3>Список товаров</h3>
                <ul>
                    {itemList.map((item, idx) => (
                        <li style={{ border: 'solid black 1px' }} key={idx}>
                            <h4>{item.title}</h4>
                            {item.price}
                            <p>{item.desc}</p>
                            <img width={200} src={item.url} alt="товар" />
                            <button onClick={() => handleDeleteItem(idx)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </section>
            <hr />
        </div>
    );
}

export default Admin;