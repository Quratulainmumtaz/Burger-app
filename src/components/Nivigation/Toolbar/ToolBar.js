  import React from 'react';
  import './ToolBar.css';
  import Logo from '../../Logo/Logo';
  import NavigationIteams from '../NavigationIteams/NavigationIteams';
  import DrawerTogglor from '../SideDrawer/DrawerToggle/DrawerToggle';
  
  
  const ToolBar =(props)=>(
      <header className="ToolBar">
         <DrawerTogglor clicked={props.drawerToggleClicked}/>
          <div className="Logo">
          <Logo />
          </div>
          
          <nav className="DeskTop">
              <NavigationIteams />
          </nav>
      </header>
  );

  export default ToolBar;