import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux';

const Home = () => {
    const products = useSelector(state => state.items);
    return (
        <div>
            <div className="row">
                {products.map((el, idx) => (
                    <Card key={idx} el={el} />
                ))}
            </div>
        </div>
    )
}

export default Home


 