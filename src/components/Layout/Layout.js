import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

import './Layout.css'

const Layout = (props) => (
    <Auxiliary>
        <div>Toolbar, Sidebar, ,Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Auxiliary>


);
export default Layout;