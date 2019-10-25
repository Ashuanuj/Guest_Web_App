import React from "react";
import "./styles/myStyles.scss";

//Paths
import { MainLayout } from "./components/Layout";
import RequestFormPage from "./pages/RequestFormPage";
import { Router, Route, Switch } from "react-router-dom";

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
  // componentWillMount() {
  //   console.log("history--------->",history); 
  //   history.listen((action) => {
  //   if (action === 'PUSH' && localStorage.getItem('accessToken') == null) {
  //         window.onpopstate = function(event) {
  //           history.push(history.location.pathname)
  //         };
  //       // } else if(action === 'PUSH' && localStorage.getItem('accessToken') != null){
  //       //   window.onpopstate = function(event) {
  //       //     history.push(history.location.pathname)
  //       //   };
  //       }else {
  //         history.go(1);
  //       }
  //   });
  // }

  render() {
    
    return (
      <Router history={history}>
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