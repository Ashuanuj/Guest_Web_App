import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import componentImg from '../assets/img/bg/component.png'

import {MdClose} from 'react-icons/md';
import { Nav,Navbar,NavItem } from 'reactstrap';
// import { FaShoppingCart} from 'react-icons/fa';
import cartIcon from '../assets/img/icons/cart.svg';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

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
      <List>
        <Link to="/dashboard">
        {['Services'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>

      </List>
      <List>
      <Link to="/requestmain">
        {['My Request'].map((text) => (
          <ListItem button key={text}>
             <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>
      </List>
      <List>
      <Link to="/">
        {['Logout'].map((text) => (
          <ListItem button key={text}>
              <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>
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
          {`Welcome Mr. ${localStorage.getItem('guestName')}`}
        </Nav>

     
        <Nav navbar className='nav-right'>
          <NavItem className="d-inline-flex">
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
    
      </Navbar> 
     
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

