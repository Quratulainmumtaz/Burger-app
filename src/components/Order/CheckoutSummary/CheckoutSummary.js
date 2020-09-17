import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';


const CheckoutSummary =(props)=>{
    return(
        <div className="CheckoutSummary">
            <h1>We hope it's testy well </h1>
            <div style={{width:'300px', height:'300px', margin:'auto'}}>
                <Burger ingredients={props.ingredient}/>
                <Button
                 btnType="Danger" clicked>
                     CANCEL
                     </Button>
                <Button btnType="Success" clicked>
                    CONTINUE
                    </Button>

            </div>
        </div>
    );

}
export default CheckoutSummary;