import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.items);

  return (
    <div>
      <h2 style={{ fontSize: '30px' }} className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900' >Ассортимент</h2>
      <br />
      <br />
      <br />
      <div className="row">
        {products.map((el, idx) => (
          <Card key={idx} el={el} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
