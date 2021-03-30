import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/website-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark pt-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="img-style" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link font-weight">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link font-weight">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addEvents" className="nav-link font-weight">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link font-weight">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn register-btn btn-style">Register</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn admin-btn btn-style">Admin</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  

            <div className="container mt-5 ">
                <h3 className="text-uppercase font-weight-bold mb-4 text-center">I grow by helping people in need.</h3>
                <div className="form-inline mt-3 d-flex justify-content-center">
                    <div className="input-group col-md-6">
                        <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                        <button className="btn btn-search" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;