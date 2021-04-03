import React from 'react';
import './CartList.css';

const CartIList = (props) => {
    const {imgURL, name, _id} = props.item;

    const deleteEvent = (id) => {
        console.log(id);
        fetch(`http://localhost:4055/deleteEvent/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log("Deleted successfully", result);
        })
    }

    return (
        <div className="col-lg-3 col-md-4 col-xs-6 img-item mb-4 pointer">
            <div className="radius">
                <img src={imgURL} className="img-fluid cart-img" alt=""/>
                <div className="card-item">
                    <div className="card-body text-center">
                        <h5 className="card-title">{name}</h5>
                        <button onClick={() => deleteEvent(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartIList;