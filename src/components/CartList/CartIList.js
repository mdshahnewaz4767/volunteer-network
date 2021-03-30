import React from 'react';
import './CartList.css';

const CartIList = (props) => {
    const {image, name} = props.item;

    return (
        <div className="col-lg-3 col-md-4 col-xs-6 img-item mb-4 pointer">
            <img src={image} className="img-fluid cart-img" alt=""/>
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default CartIList;