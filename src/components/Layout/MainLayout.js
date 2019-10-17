import { Content, Header } from '../Layout';
import React from 'react';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      // <main className="cr-app col-sm-auto offset-md-0  col-md-auto offset-md-0 col-lg-0 offset-lg-0">
      <main className="cr-app">
      <Content fluid>
          <Header />
          {children}
          {/* <Footer /> */}
        </Content>
      </main>
    );
  }
}

export default MainLayout;
