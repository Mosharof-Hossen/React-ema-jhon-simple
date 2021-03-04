import React from 'react';

const ReviewItem = (props) => {
    const {name ,quantity} = props.product
    return (
        <div>
            <h4>product name:{name}</h4>
            <p>Quantity:{quantity}</p>
            <button className = "btn-add"> Remove</button>
        </div>
    );
};

export default ReviewItem;