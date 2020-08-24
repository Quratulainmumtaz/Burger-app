import React from 'react';

import burgerlogo from '../../assest/Images/burger-logo.png';
import './Logo.css'


const Logo =(props)=>(
    <div className="Logo" style={{height:props.height}}>  
        <img src={burgerlogo} alt="Mylogo" />
        {/* <img src="../../assest/Images/burger-logo(1).png" alt="Myimg"/> */}
    </div>
);

export default Logo;
