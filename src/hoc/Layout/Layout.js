import React,{Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import './Layout.css';
import ToolBar from '../../components/Nivigation/Toolbar/ToolBar';
import SideDrawer from '../../components/Nivigation/SideDrawer/SideDrawer';




class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});

    }
    sideDrawerToggleHandler=()=>{
        this.setState(
            (prveState)=>{
                return{showSideDrawer: !prveState.showSideDrawer};
            }
        );
    }
    render(){
        return(
            <Auxiliary>
         <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
         <SideDrawer open = {this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
        {/* <div>Toolbar, Sidebar, ,Backdrop</div> */}
       
        <main className="content">
            {this.props.children}
        </main>
    </Auxiliary>


        );
    }
}

export default Layout;