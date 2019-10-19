
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

import {MdClose} from 'react-icons/md';
import { Nav,Navbar,NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {shallowEqual,  useSelector } from "react-redux";
import history from '../../helper/history';
// import { CART_ITEMS } from '../../actions';

const useStyles = makeStyles({
  // list: {
  //   width: 250,
  // },
  fullList: {
    width: 'auto',
  },
});
export default function Header(props) {
console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiioooooooooooooooooooooooooopppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
  let { header, dashboard ,cart, cartCount} = useSelector(state => ({
    header: state.header.header,
    dashboard: state.header.dashbaord,
    cart:state.header.cart,
    cartCount: state.header.cartCount 
  }),shallowEqual)
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [cartItems, setCartItems] = React.useState(0);
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
    localStorage.removeItem('serviceCategoryId')
    localStorage.removeItem('room_no')
    localStorage.removeItem('instructions')
    localStorage.removeItem('dashboard')
    localStorage.removeItem('serviceSubCategoryId')
  }
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  React.useEffect(
    () => {
      // if (componentDidUpdate & (x or y changed))
      localStorage.getItem('cartCount') === null ?
      setCartItems(0) : setCartItems(localStorage.getItem('cartCount'));
    }
  );


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
      <p> Copyright Helius Â© 2019 </p>
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
            <div style={{ position: 'relative', width: '30%', alignItems: 'center' }} onClick={() => handleClick("/checkout")}> 
            {/* style={{display: 'flex', flexDirection: 'row', width: '30%', alignItems: 'center', justifyContent: 'space-between'}} */}
              <img
                  src={cartIcon}
                  className="cartImg"
                  style={{position: 'relative', display: 'inline-block'}}
                  alt="cartimg"   
              />

              <span style={{borderRadius: '50%', backgroundColor: 'white', color: 'black', height: '62%', width: '230%', fontSize: '0.7em', padding: '10% 20%', left: '-3%', top: '40%', left: '120%', position: 'absolute', textAlign: 'center' }}>
              {localStorage.getItem('cartCount') == null || localStorage.getItem('cartCount') == 0 ? 0 : localStorage.getItem('cartCount')}
              </span>
            </div>
            
            {/* </Link>  */}
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
