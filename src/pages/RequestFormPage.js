import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row, Card,CardImg} from 'reactstrap';
import RequestForm from '../components/RequestForm'
import componentImg from '../components/assets/img/bg/component.png'
import Footer from '../components/Layout/Footer';
// import {Link} from 'react-router-dom';
import { guestLogIn} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RequestFormPage extends React.Component {
   
  // Submit = values => {
  //   // print the form values to the console
  //   console.log("submitting Form values -------->", values);
  //   console.log("path--->",this.props.histroy);
  //   // return(
  //   //   <Link to="/dashboard"></Link>
  //   // );
  // }

  constructor(props)
    {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit=(data,dispatch) => 
    {

        // let x = this.props.actions.guestLogIn(data);
        // console.log(x, '??????????????????????????????????');
        // this.props.actions.guestLogIn(data);
        dispatch(this.props.actions.guestLogIn(data));
        console.log("DATA======>",data);
    };

  render() {
        return (
          <div className="main-requestform">
            {/* <Container> */}
            <Row className="HomeMain"> 
        
            <Col className="pz" sm={{ size: 'auto', offset: 0 }} md={{ size: 'auto', offset: 3 }} lg={{ size: 4, offset: 4 }} >
             
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
             
              <Footer/>
             </Col>
           </Row>
             {/* </Container> */}
       
        
          </div>
       
        );
    }
}

RequestFormPage.propTypes = {
  actions: PropTypes.object.isRequired,
  // error: PropTypes.object,
};

function mapStateToProps(state)
{
  return {
      // error: state.User.error,
      login: state.gformReducers.IS_LOGIN
  };
}

function mapDispatchToProps(dispatch)
{
  return {
      actions: bindActionCreators({
          guestLogIn,
      }, dispatch),
  };
}

export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(RequestFormPage);

