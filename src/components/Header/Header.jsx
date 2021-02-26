import React from 'react';
import ema_logo from "../../images/logo.png"
import"./Header.css";
const Header = () => {
    return (
        <div className = "header">
            <img className = "logo" src={ema_logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            
        </div>
    );
};

export default Header;