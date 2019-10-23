import React from "react";
import "./styles/myStyles.scss";

//routes paths
// import createRoutes from './routes';

//Paths
import { MainLayout } from "./components/Layout";
import RequestFormPage from "./pages/RequestFormPage";
import { Router, Route, Switch } from "react-router-dom";
import { Redirect, IndexRedirect, IndexRoute } from "react-router";

import DashboardPage from "./pages/DashboardPage";
import ServicesPage from "./pages/ServicesPage";
import MainSubcategoryPage from "./pages/SubcategoryPages/MainSubcategoryPage";
import CheckoutPage from "./pages/cart";
import WakeUp from "./pages/WakeUp";
import FrontOffice from "./pages/FrontOffice";
import RequestMain from "./pages/RequestPages/RequestMain";
import Fullscreen from "react-full-screen";

import history from "./helper/history";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isFull: false

    };
    this.currentPathname = null;
    this.currentSearch = null;
  }
  componentWillMount() {
    console.log("history--------->",history);
    
    // history.listen((newLocation, action) => {
    // // if(localStorage.getItem('accessToken') != null)
    // //   history.push(history.location.pathname)
    // if (action === 'PUSH'  && (localStorage.getItem('accessToken') != null)) {
    //   history.go(history.location.pathname)
    // } else {
    //   history.go("/");
    // }
    // });
    // if(localStorage.getItem('accessToken') != null){
    //   history.push(null, history.location.pathname);
    //   window.onpopstate = function(event) {
    //     history.go(1);
    //   };
    // }

    // history.listen((newLocation, action) => {
    //   if (action === "PUSH" && localStorage.getItem('accessToken') != null) {
    //     if (
    //       newLocation.pathname !== this.currentPathname ||
    //       newLocation.search !== this.currentSearch 
          
    //     ) {
    //       // Save new location
    //       console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    //       this.currentPathname = newLocation.pathname;
    //       this.currentSearch = newLocation.search;

    //       // Clone location object and push it to history
    //       history.push({
    //         pathname: newLocation.pathname,
    //         search: newLocation.search
    //       });
    //     } 
      // } else if(action !== 'PUSH') {
      // if(
      //   newLocation.pathname != this.currentPathname ||
      //   newLocation.search != this.currentSearch 
      //   ) {
      //   console.log('ooooooooooooooooooooooooooo')
      //   // history.go(history.location.pathname)
      //   this.currentPathname = newLocation.pathname;
      //     this.currentSearch = newLocation.search;

      //     // Clone location object and push it to history
      //     history.push({
      //       pathname: newLocation.pathname,
      //       search: newLocation.search
      //     });
      // }
    // } else if(action==='POP' && localStorage.getItem('accessToken') != null) {
    //   console.log(history,'1111111111111111111111')
    //   history.replace({
    //     pathname: newLocation.pathname,
    //     search: newLocation.search
    //   });
      // history.go(1)
      // history.push(history.location.pathname)
    // }
    //  else 
    // history.push('/')
    // });
  }

  handleBack = () => {
    console.log(history, '1111111111111111111111111111111111111111111111111')
  }
  render() {
    
    return (
      <Router history={history}>
        {/* routes={createRoutes}  */}
        <Switch>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            <Route exact path="/" component={RequestFormPage} />
            {/* {localStorage.getItem("accessToken") === null ? (
              history.push('/')
            ) : ( */}
              <MainLayout>
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/services" component={ServicesPage} />
                <Route
                  exact
                  path="/mainsubcategorypage"
                  component={MainSubcategoryPage}
                />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/wakeup" component={WakeUp} />
                <Route exact path="/frontoffice" component={FrontOffice} />
                <Route exact path="/requestmain" component={RequestMain} />
              </MainLayout>
             {/* )}  */}
          </Fullscreen>
        </Switch>
      </Router>
    );
  }
}
export default App;