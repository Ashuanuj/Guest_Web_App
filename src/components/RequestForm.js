import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, Input,FormGroup } from 'reactstrap';
import { Field,reduxForm } from 'redux-form';
import TextInput from '../components/forms/TextInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import flow from 'lodash/flow';
var a
class RequestForm extends React.Component{
    render(){
      const { handleSubmit} = this.props;
      console.log(this.props.error,';;;;;;;;;;;;;;;;;;aaaaaaaaaaaaaaaaaaaaa')
      if( this.props.error&&this.props.error.message){
        this.props.error&&this.props.error.message.indexOf('Missing')!== -1? a=true:a=false
        }else{
          a=false
        }
        console.log(a,'llllllllllllll11111111111111111')

  return (
    <Col className="form-main">
      <Form onSubmit={handleSubmit} autoComplete="off">

      <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Guest') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 || a==true)  ?'1px solid red':''}} >
          <Field component={TextInput} name="name" label="Name" onChange={this.props.onChange} />
        </FormGroup>

        <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Room') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 || a==true) ?'1px solid red':''}}>
          <Field component={TextInput} name="roomno" label="Room No." onChange={this.props.onChange} />
        </FormGroup>
        
        <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Date') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 ||a==true||this.props.error.customMessage.indexOf('User') !== -1)?'1px solid red':''}}>
          <Field type="date" component={TextInput} name="dob" label="Date of Birth"  value=""/>  
        </FormGroup>
 
        <Button
          size="lg"
          className="Requestbtn bg-gradient-Requestbtn border-0"
          block
        >
          REQUEST ACCESS
        </Button>
        
      </Form>
    </Col>

    );
  }
}

RequestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    error: state.gformReducers.error
  }
}

export default flow([
  connect(mapStateToProps, null),
  reduxForm({
  form: "guestForm"
 }),
])
(RequestForm);