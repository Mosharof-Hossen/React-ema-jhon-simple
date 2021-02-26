import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total,prd)=>total + prd.price,0)
    const shipping = cart.reduce((total,prd) => total+prd.shipping,0)
    const tax = total *(5/100)
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items ordered: {cart.length}</h4>
            <p><small>Item:{total}</small></p>
            
            <p><small>Shipping and Handling:    ${shipping}</small></p>
            <p><small>Total before tax:{total + shipping}</small></p>
            <p><small>Estimated Tax:{tax}</small></p>
            <h3>Order Total:	${total + shipping  +tax}</h3>
        </div>
    );
};

export default Cart;