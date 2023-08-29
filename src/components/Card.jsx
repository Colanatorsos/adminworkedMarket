import React from "react";
import { addToCart } from "../store/reducers/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-3" style={{ paddingBottom: "34px" }}>
      <div
        className="card"
        style={{
          width: "320px",
          height: "473px",
          display: "block",
          margin: "0 auto",
          objectFit: "contain",
          borderRadius: "10px",
          borderWidth: "2px",
        }}
      >
        {el.quantity && (
          <p style={{ padding: "1px 25px", fontWeight: "500" }}>
            Количество в корзине: {el.quantity}
          </p>
        )}
        <img
          style={{ width: "320px", height: "320px", objectFit: "contain" }}
          src={el.url}
          alt={el.title}
        />
        <div className="min-h-70 min-w-50 bg-black">
          <h2
            style={{
              padding: "0px 25px 1px",
              fontWeight: "600",
              fontSize: "1.25rem",
            }}
            className="text-base font-extrabold "
          >
            {el.title}
          </h2>
          <p
            style={{
              padding: "1px 25px",
              fontWeight: "400",
              color: "rgb(144,144,144)",
            }}
          >
            {el.desc}
          </p>
          <p
            style={{ padding: "1px 25px 15px", fontWeight: "500" }}
            className="text-sm font-medium text-zinc-200"
          >
            {el.price}
          </p>

          <button
            style={{ margin: '1px 25px', padding: '8px 100px', justifyContent: 'center', fontWeight: '400' }}
            className="flex rounded bg-gray-200 hover:bg-indigo-500 hover:text-white px-10 py-2 font-medium transition duration-300 ease-in-out"
            onClick={() => dispatch(addToCart(el))}>Добавить</button>

        </div>
      </div>
    </div>
  );
};

export default Card;
