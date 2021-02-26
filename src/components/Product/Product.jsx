import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    const {img ,name,seller,price,stock } = props.product
    return (
        <div className = "product">
            <div className = "product-image">
                <img src={img} alt=""/>
            </div>
            <div className = "product-details">
                <h4 >{name}</h4>
                <div>
                    <div>
                        <p><small>by: {seller}</small></p>
                        <h3>${price}</h3>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button className = "btn-add"  onClick = {()=>{props.handelAddProduct(props.product)}} ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;