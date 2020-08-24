import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationIteams from '../NavigationIteams/NavigationIteams';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer =(props)=>{
    
    return(
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className="SideDrawer">
            <div className="logo">
            <Logo />
            </div>
            
            <nav>
                <NavigationIteams />
            </nav>
        </div>
        </Auxiliary>
        
    );
}

export default SideDrawer;