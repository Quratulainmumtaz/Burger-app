import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationIteams from '../NavigationIteams/NavigationIteams';
import './SideDrawer.css'

const SideDrawer =()=>{
    return(
        <div className="SideDrawer">
            <Logo />
            <nav>
                <NavigationIteams />
            </nav>
        </div>
    );
}

export default SideDrawer;