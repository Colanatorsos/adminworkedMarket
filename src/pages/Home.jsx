import React from 'react'
import Card from '../components/Card'

const Home = () => {
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


const products = [
        {
            name: 'Машина',
            price: 1234,
            img: 'https://cdn.nerdschalk.com/wp-content/uploads/2022/12/how-to-put-photos-side-by-side-on-iphone-759x427.png',
            description: 'машина для вас'
        },
        {
            name: 'Компьютер',
            price: 1234,
            img: 'https://cdn.nerdschalk.com/wp-content/uploads/2022/12/how-to-put-photos-side-by-side-on-iphone-759x427.png',
            description: 'Компы'
        },
        {
            name: 'Телефон',
            price: 1234,
            img: 'https://cdn.nerdschalk.com/wp-content/uploads/2022/12/how-to-put-photos-side-by-side-on-iphone-759x427.png',
            description: 'Айфон'
        },
        {
            name: 'Стиральная машина',
            price: 1234,
            img: 'https://cdn.nerdschalk.com/wp-content/uploads/2022/12/how-to-put-photos-side-by-side-on-iphone-759x427.png',
            description: 'для стирки полуавтомат'
        },
        {
            name: 'Швейная машина',
            price: 1234,
            img: 'https://cdn.nerdschalk.com/wp-content/uploads/2022/12/how-to-put-photos-side-by-side-on-iphone-759x427.png',
            description: 'для шитья'
        },
    ]
 