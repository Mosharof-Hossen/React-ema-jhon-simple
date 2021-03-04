import React, { useState } from 'react';
import fakeData from "../../fakeData"
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const [products , setProducts] = useState(fakeData)
    const [cart , setCart ] = useState([])
    const handelAddProduct = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length
        addToDatabaseCart(product.key ,count)
    }

    return (
        <div className = "shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} showAddToCart = {true} handelAddProduct = {handelAddProduct} product = {product}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;