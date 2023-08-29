import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/reducers/itemsSlice";


const Admin = () => {
  const initialItemState = {
    title: "",
    price: "",
    desc: "",
    url: "",
  };


  const [item, setItem] = useState(initialItemState);
  const itemList = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addItem(item));
    setItem(initialItemState);
  };

  const handleDeleteItem = (idx) => {
    dispatch(deleteItem(idx));
  };

  return (
    <div>
      <h2>Админ Панель</h2>
      <section className="Adding">
        <h3>Добавить товар</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleInputChange}
            required
            placeholder="Название"
          />
          <input
            type="text"
            name="price"
            value={item.price}
            onChange={handleInputChange}
            required
            placeholder="Цена"
          />
          <br />
          <input
            type="text"
            name="desc"
            value={item.desc}
            maxLength={15}
            onChange={handleInputChange}
            required
            placeholder="Описание"
          />
          <input
            type="text"
            name="url"
            value={item.url}
            onChange={handleInputChange}
            required
            placeholder="URL-Картинки"
          />
          <br />
          <button type="submit">Добавить</button>
        </form>
      </section>


      <hr />
      <section className="Editing">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Список товаров
          </h3>
          <div className="row">
            {itemList.map((item, idx) => (
              <div className="col-3" key={idx}>
                <div className="min-h-50 min-w-60 border-2 rounded">
                  <img
                    style={{ width: '300px', height: '400px', objectFit: 'contain' }}
                    src={item.url}
                    alt="товар"
                  />
                  <div className="min-h-80 min-w-60 bg-black">
                    <h3 className="text-lg py-2 px-8 font-extrabold">{item.title}</h3>
                    <p className="text-sm font-medium text-zinc-200">
                      {" "}
                      {item.price}
                    </p>
                    <p>{item.desc}</p>

                    <button
                      className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => handleDeleteItem(idx)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Admin;