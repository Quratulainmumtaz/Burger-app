  import React from 'react';
  import './ToolBar.css'
  import Logo from '../../Logo/Logo';
  import NavigationIteams from '../NavigationIteams/NavigationIteams';
  
  
  const ToolBar =(props)=>(
      <header className="TooBar">
          <div>Menu</div>
          <Logo  height="11%"/>
          <nav>
              <NavigationIteams />
          </nav>
      </header>
  );

  export default ToolBar;