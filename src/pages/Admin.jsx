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
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Добавить товар
      </h2>
      <section className="Adding">
        <form
          className="flex w-10 space-x-4 flex-1 justify-center py-12 lg:px-8"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            className=" block w-40 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            name="title"
            value={item.title}
            onChange={handleInputChange}
            required
            placeholder="Название"
          />
          <input
            className="flex w-40 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            name="price"
            value={item.price}
            onChange={handleInputChange}
            required
            placeholder="Цена"
          />
          <br />
          <input
            className="flex w-40 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            name="desc"
            value={item.desc}
            onChange={handleInputChange}
            required
            placeholder="Описание"
          />
          <input
            className="flex w-40 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            name="url"
            value={item.url}
            onChange={handleInputChange}
            required
            placeholder="URL-Картинки"
          />
          <br />
          <button className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Добавить
          </button>
        </form>
      </section>
      
      <section className="Editing">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3
          style={{padding: '10px 0px 45px'}}
           className="mt-10 text-center py-8 px-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Список товаров
          </h3>
          <div className="row">
            {itemList.map((item, idx) => (
              <div className="col-3"
              style={{paddingBottom: '34px'}}
               key={idx}>
                <div
                style={{ width: '320px',height: '473px', display: 'block' , margin:'0 auto' ,objectFit: 'contain', borderRadius: '10px'}}
                className="min-h-30 min-w-40 border-2">
                  <img
                  style={{ width: '320px',height: '320px', objectFit: 'contain'}}
                    src={item.url}
                    alt="товар"
                  />
                
                  <div className="min-h-70 min-w-50 bg-black ">
                    <h2 style={{ padding: '0px 25px 1px', fontWeight: '600', fontSize: '1.25rem'}}
                     className="text-base font-extrabold ">{item.title}</h2>
                  
                    <p
                    style={{ padding: '1px 25px', fontWeight: '400', color: 'rgb(144,144,144)'}}
                    >{item.desc}</p>
                        <p 
                     style={{ padding: '1px 25px 15px', fontWeight: '500'}}
                    className="text-sm font-medium text-zinc-200">
                      {" "}
                      {item.price}
                    </p>

                    <button
                       style={{ margin: '1px 25px',padding: '8px 105px', justifyContent:'center', fontWeight: '400'}}
                      className="flex rounded bg-gray-200 hover:bg-indigo-500 hover:text-white px-10 py-2 font-medium transition duration-300 ease-in-out"
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
    </div>
  );
};

export default Admin;
