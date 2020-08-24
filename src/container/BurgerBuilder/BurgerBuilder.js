import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


import axios from '../../axios.orders';

const INGREDINT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}


class BurgerBuilder extends Component {

    state = {
        ingredient: null,

        // ingredient:{
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    //components life cycle 
    componentDidMount() {
        axios.get('https://react-my-burger-13f6b.firebaseio.com/ingredient.json').then(
            response => {
                this.setState({ ingredient: response.data });

            });
    }
    //end of components life cycle 
    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const priceAddition = INGREDINT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredient: updateIngredient });
        this.updatePurchaseState(updateIngredient);

    }
    //add ingredient 

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredient = {
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const priceDeduction = INGREDINT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredient: updateIngredient });
        this.updatePurchaseState(updateIngredient);

    }
    //remove ingredient handler 
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    //purchase handler
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });

    }
    //Purchse cancel order
    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        // alert('You can Continous')
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Qurat',
                address: {
                    street: "BWP",
                    zipCode: '123',
                    country: 'Pakistan'
                },
                email: 'test123@gmail.com'
            },
            deliveryMehtod: 'fastdelivery'

        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })


            .catch(error => { this.setState({ loading: false, purchasing: false }); });
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredient
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

       
        //database conectivity 
        let burger = <Spinner />;
        if (this.state.ingredient) {
             burger = (
                <Auxiliary>
                    <Burger ingredient={this.state.ingredient} />
                    <BuildControls ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchaseable={this.state.purchaseable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />

                </Auxiliary>
            );
            orderSummary = <OrderSummary ingredient={this.state.ingredient}
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;

        }

        return (
            <Auxiliary>
                <Model show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                    {/* <OrderSummary ingredient={this.state.ingredient}
                   price={this.state.totalPrice}
                   purchaseCanceled={this.purchaseCancelHandler}
                   purchaseContinued={this.purchaseContinueHandler} /> */}
                </Model>
                {burger}
                {/* <Burger ingredient={this.state.ingredient} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/> */}
            </Auxiliary>

        );

    }
}
export default withErrorHandler(BurgerBuilder, axios);