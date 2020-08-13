import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary =(props)=>{
    const ingrediantSummary = Object.keys(props.ingredient)
    .map(igKey =>{
    return <li key={igKey}>
        <span style={{textTransform:"capitalize"}}>{igKey}:</span> 
        {props.ingredient[igKey]}</li>;
    });
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrediants: </p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p>Conitous the checkout?</p>
        </Auxiliary>

    );

};

export default OrderSummary;