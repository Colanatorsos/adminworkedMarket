import React from 'react'
import { addToCart } from '../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'

const Card = ({ el }) => {
    const dispatch = useDispatch()
    return (
        <div className='col-3'>
            <div className="card">
                <img src={el.img} alt="" />
                <h3>{el.name}</h3>
                <p>{el.description}</p>
                <div>{el.price}</div>
                <button onClick={() => dispatch(addToCart(el))} >Добавить</button>
            </div>
        </div>
    )
}

export default Card