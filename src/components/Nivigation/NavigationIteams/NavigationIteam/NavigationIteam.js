import React from 'react';

import './NavigationIteam.css'

const NavigationIteam =(props)=>(
    <li className="NavigationIteam">
        <a href={props.link} className={props.active}>{props.children}</a>
        </li>
);

export default NavigationIteam;