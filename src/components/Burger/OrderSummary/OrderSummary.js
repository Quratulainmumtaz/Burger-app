import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
    const ingrediantSummary = Object.keys(props.ingredient)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
                {props.ingredient[igKey]}</li>;
        });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrediants: </p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Conitous the checkout?</p>

            <Button clicked={props.purchaseCanceled}>Cancel</Button>
            <Button clicked={props.purchaseContinued}>Continue</Button>



        </Auxiliary>

    );

};

export default OrderSummary;