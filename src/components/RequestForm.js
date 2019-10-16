import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, Input,FormGroup } from 'reactstrap';
import { Field,reduxForm } from 'redux-form';
import TextInput from '../components/forms/TextInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import flow from 'lodash/flow';
import DatePickerInput from './forms/DatePickerInput';
import moment from 'moment';

// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//   errors.name = 'Required';
//   }
  
//   if (!values.roomno) {
//   errors.roomno = 'Required';
//   }
//   return errors;
//   };
let a
class RequestForm extends React.Component{
  
    render(){
      const { handleSubmit} = this.props;
      console.log(this.props.error, 'ppppppppppppp')
      if( this.props.error && this.props.error.message){
      this.props.error && this.props.error.message.indexOf('Missing')!== -1? a=true:a=false
      }else{
        a=false
      }
      console.log(a,'565555555555555555555555555')

  return (
    <Col className="form-main">
      <Form onSubmit={handleSubmit} autoComplete="off">

        <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Guest') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 || a==true)  
          ?'1px solid red':''}} >
          <Field component={TextInput} name="name" label="Name" onChange={this.props.onChange} />
        </FormGroup>

        <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Room') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 || a==true) 
          ?'1px solid red':''}}>
          <Field component={TextInput} name="roomno" label="Room No." onChange={this.props.onChange} />
        </FormGroup>
        
        <FormGroup style={{border:a==true?'1px solid red':
          this.props.error && (this.props.error.customMessage.indexOf('Date') !== -1 || this.props.error.customMessage.indexOf('Invalid') !== -1 || a==true ||this.props.error.customMessage.indexOf('User') !== -1)
          ?'1px solid red':''}}>
          {/* <Field type="date" component={TextInput} name="dob" label="Date of Birth" value=""  />   */}
        
        <Field
          name="dob"
          placeholderText="Date of Birth"
         inputValueFormat='YYYY-MM-DD'
          normalize={value => (value ? moment(value).format('YYYY-MM-DD') : null)}
          component={DatePickerInput}
          
          onChange={this.props.onChange}
        /> 
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
  console.log(state,'llllllllllllllllllllllllll')
  return {
    error: state.gformReducers.error
  }
}

export default flow([
  connect(mapStateToProps, null),
  reduxForm({
  form: "guestForm",
  //validate
 }),
])
(RequestForm);