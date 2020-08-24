import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    // componentWillUpdate(){
    //     console.log('[OrderSummary] willUpdate');
    // }
   componentDidUpdate(){
       console.log('[OrderSummary ] DidUpdate')
   }
    render(){
        const ingrediantSummary = Object.keys(this.props.ingredient)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
                {this.props.ingredient[igKey]}</li>;
        });
        return(
            <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrediants: </p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
            <p>Conitous the checkout?</p>

            <Button clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button clicked={this.props.purchaseContinued}>Continue</Button>



        </Auxiliary>
        );
    }
}


export default OrderSummary;