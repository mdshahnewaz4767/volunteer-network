import React, { useEffect, useState } from 'react';
import CartIList from '../CartList/CartIList';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(fakeData);
    })
    return (
        <div>
            <Header></Header>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        items.map(item => <CartIList item={item} key={item.id}></CartIList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;