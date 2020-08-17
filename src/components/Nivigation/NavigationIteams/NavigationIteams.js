import React from 'react';
import './NavigationIteams.css'
import NavigationIteam from './NavigationIteam/NavigationIteam';
const NavigationIteams =(props)=>(
    <ul className="NavigationIteams">
      <NavigationIteam>Burger Builder</NavigationIteam>
      <NavigationIteam>CheckOut</NavigationIteam>
    </ul>
);

export default NavigationIteams;
