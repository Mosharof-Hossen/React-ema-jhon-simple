import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    const {img ,name,seller,price,stock,features } = props.product
    return (
        <div className = "product">
            <div className = "product-image">
                <img src={img} alt=""/>
            </div>
            <div className = "product-details">
                <h4 >{name}</h4>
                <div className = "product-show">
                    <div>
                        {/* ok */}
                        <p><small>by: {seller}</small></p>
                        <h3>${price}</h3>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button className = "btn-add"  onClick = {()=>{props.handelAddProduct(props.product)}} ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                    </div>
                    <div className = "feature">
                        <h3>Features</h3>
                        <ul>
                            {
                                features.map((des,value) =><li><small>{des.description}: {des.value}</small></li>)
                            }
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;