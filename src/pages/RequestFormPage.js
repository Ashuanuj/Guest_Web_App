import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card, CardImg } from 'reactstrap';
import RequestForm from '../components/RequestForm'
import componentImg from '../components/assets/img/bg/component.png'
import Footer from '../components/Layout/Footer';
import { guestLogIn, loadService } from '../actions';
// import { guestLogIn, loadService, appLoaded } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RequestFormPage extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit = (data, dispatch) => {
    this.props.actions.guestLogIn(data);
    // this.props.actions.appLoaded();
    this.props.actions.loadService();
  };

  render() {
    return (
      <div className="main-requestform">
        <Row className="HomeMain">
          <Col className="pz"  md={6} lg={4} >
            <Card body className="cardbody-main">
              <CardImg
                src={componentImg}
                className="cardImg"
              />
              <div className="cardImgtext">
                <p className="para">Welcome</p>
                <p className="subpara">Are you ready to enjoy a whole new guest experience without limits? Let’s go!</p>
              </div>

              <RequestForm
                onSubmit={this._handleSubmit}
              />

            </Card>

            <Footer />
          </Col>
        </Row>
      </div>

    );
  }
}

RequestFormPage.propTypes = {
  actions: PropTypes.object.isRequired,
  // error: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    // error: state.User.error,
    login: state.gformReducers.IS_LOGIN
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      guestLogIn,
      loadService,
      // appLoaded
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestFormPage);

