import React from 'react';
import './styles/myStyles.scss';

//routes paths
// import createRoutes from './routes';

//Paths
import { MainLayout } from './components/Layout';
import RequestFormPage from './pages/RequestFormPage'
import {Router, Route, Switch } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import MainSubcategoryPage from './pages/SubcategoryPages/MainSubcategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import WakeUp from './pages/WakeUp';
import FrontOffice from './pages/FrontOffice';
import RequestMain from './pages/RequestPages/RequestMain';


import history from './helper/history';

class App extends React.Component {
  render() {
    return (
        <Router history={history} > 
            {/* routes={createRoutes}  */}
            <Switch>
            <Route exact path="/" component={RequestFormPage} />
             <MainLayout>
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/services" component={ServicesPage} />
                <Route exact path="/mainsubcategorypage" component={MainSubcategoryPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/wakeup" component={WakeUp} />
                <Route exact path="/frontoffice" component={FrontOffice} />
                <Route exact path="/requestmain" component={RequestMain} />

            </MainLayout>
           </Switch>
          </Router>
      );
  }
}
export default App;