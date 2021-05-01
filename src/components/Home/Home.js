import React, { useEffect, useState } from 'react';
import CartIList from '../CartList/CartIList';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import './Home.css';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://gentle-hamlet-18819.herokuapp.com/events")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setItems(data);
        })
        // setItems(fakeData);
    })
    return (
        <div className="home-section">
            <Header></Header>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-3 mt-5 pt-4">
                    {
                        items.map(item => <CartIList item={item} key={item._id}></CartIList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;