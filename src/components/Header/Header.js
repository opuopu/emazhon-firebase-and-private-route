import React from 'react';
import { NavLink } from 'react-router-dom';
import Useauth from '../../context/Authcontext';
import Usefirebase from '../../hooks/Usefirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const{user,signout} = Useauth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/register">register now</NavLink>
                <NavLink to="/login">Log in</NavLink>
                {
                    user?.email && <button onClick={signout}>log out</button>
                }
                
            </nav>
        </div>
    );
};

export default Header;