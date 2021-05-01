import React from 'react';
import { Link } from 'react-router-dom';
import './CartList.css';

const CartIList = (props) => {
    const {imgURL, name, _id} = props.item;

    const deleteEvent = (id) => {
        console.log(id);
        fetch(`https://gentle-hamlet-18819.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log("Deleted successfully", result);
        })
    }

    // random color array for event card text background
    const colorArr = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF']
    const randomColor = Math.floor(Math.random() * (4 - 0) + 0);
    
    return (
        <div className="col-lg-3 col-md-4 col-xs-6 img-item mb-4 pointer">
            <div className="radius">
               <Link onClick={() => deleteEvent(_id)} className="text-decoration-none">
                    <img src={imgURL} className="img-fluid cart-img" alt=""/>
                    <div className="cart-item">
                        <div style={{backgroundColor: `${colorArr[randomColor]}`, height: '65px'}} className="card-body text-center  text-white p-0 d-flex justify-content-center align-items-center px-1">
                            <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
               </Link>
            </div>
        </div>
    );
};
export default CartIList;