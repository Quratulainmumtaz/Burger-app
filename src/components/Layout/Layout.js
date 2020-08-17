import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';


import './Layout.css'
import ToolBar from '../Nivigation/Toolbar/ToolBar';
import SideDrawer from '../Nivigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <Auxiliary>
         <ToolBar />
         <SideDrawer />
        {/* <div>Toolbar, Sidebar, ,Backdrop</div> */}
       
        <main className="content">
            {props.children}
        </main>
    </Auxiliary>


);
export default Layout;