import React from 'react';
// import burgrlogo from '../../assest/Images/burger-logo(1).png';
import './Logo.css'


const Logo =(props)=>(
    <div className="Logo" style={{height:props.height}}>  
        {/* <img src={burgrlogo} alt="Mylogo" /> */}
        <img src="../../assest/Images/burger-logo(1).png" alt="Myimg"/>
    </div>
);

export default Logo;
