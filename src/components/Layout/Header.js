
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


import componentImg from '../assets/img/bg/component.png'
// import Cart from '../assets/img/icons/cart1.svg';

import cartIcon from '../assets/img/icons/cart.svg';
import Footer from './Footer';

import {MdClose} from 'react-icons/md';
import { Nav,Navbar,NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {shallowEqual,  useSelector } from "react-redux";
import history from '../../helper/history';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
// 
var qa;
export default function Header() {

  let { header, dashboard ,cart} = useSelector(state => ({
    header: state.header.header,
    dashboard: state.header.dashbaord,
    cart:state.header.cart 
  }),shallowEqual)
   
   qa=header;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const handleClick=(link)=>{
    history.push(link)
  }
  const handleLogOut=(link)=>{
    history.push(link)
    localStorage.removeItem('roomNo')
    localStorage.removeItem('header')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('guestName')
    localStorage.removeItem('areaId')
    localStorage.removeItem('guestId')
    localStorage.removeItem('dashboard')
  }
  console.log(qa,'aaaaaaaaaaaaaaaaaaaaaaaa')
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
  <>
    <div className="sidebarImg-main">
      <img
        src={componentImg}
        className="sidebarImg"
        alt="cmp"
      />
      <span className="headername text-white">
        
        {`Welcome Mr. ${ localStorage.getItem('guestName') }`}
      </span>
      <span className="crossbtn" onClick={toggleDrawer('left', false)}> <MdClose/></span>
    </div>

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List onClick={()=>handleClick("/dashboard")}>
        {['Services'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}

      </List>
      <List  onClick={()=>handleClick("/requestmain")} >
        {['My Request'].map((text) => (
          <ListItem button key={text}>
             <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List  onClick={()=>handleLogOut("/")} >
      {/* <Link to="/"> */}
        {['Logout'].map((text) => (
          <ListItem button key={text}>
              <ListItemText primary={text} />
          </ListItem>
        ))}
        {/* </Link> */}
      </List>
    </div>
    <div className="sidebar-footer">
       <Footer/>
    </div>
  </>
  );

  return (
    <div>
         <Navbar expand className="bgNav">
        
         <Nav navbar className="">
          <IconButton
              cursor= "pointer"
              aria-label="open drawer"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
         </Nav>

        <Nav className="Nav-Name">
        {dashboard==true? header :`Welcome Mr. ${ localStorage.getItem('guestName') }`}
        {/* {localStorage.getItem('header')} */}
        </Nav>

         <div>
           {cart?<div></div>:
        <Nav navbar className='nav-right'>
          <NavItem className="d-inline-flex">
          {/* <Link to="/checkout"><span><img src="../assets/img/icons/cart.svg" /></span></Link>        
          {/* <FaShoppingCart size={25} style={{ color: '#fff' }} /> 
          <IconButton>
           <Cart /> 
  </IconButton> */}
          <Link to="/checkout">
              {/* <span> <FaShoppingCart size={25} style={{ color: '#fff' }} /></span> */}
              <img
                  src={cartIcon}
                  className="cartImg"
                  alt="cartimg"   
              />
            </Link> 
           </NavItem>
        </Nav>
           }
    </div>
      </Navbar> 
     
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}


