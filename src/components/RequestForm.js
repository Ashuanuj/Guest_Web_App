import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, Input,FormGroup } from 'reactstrap';
import { Field,reduxForm } from 'redux-form';
import TextInput from '../components/forms/TextInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import flow from 'lodash/flow';

class RequestForm extends React.Component{
    render(){
      const { handleSubmit} = this.props;
      console.log(this.props, 'ppppppppppppp')

  return (
    <Col className="form-main">
      <Form onSubmit={handleSubmit} autoComplete="off">

        <FormGroup style={{border:this.props.error && (this.props.error.indexOf('Guest') !== -1 || this.props.error.indexOf('Invalid') !== -1)?'1px solid red':''}} >
          <Field component={TextInput} name="name" label="Name" onChange={this.props.onChange} />
        </FormGroup>

        <FormGroup style={{border:this.props.error && (this.props.error.indexOf('Room') !== -1 || this.props.error.indexOf('Invalid') !== -1)?'1px solid red':''}}>
          <Field component={TextInput} name="roomno" label="Room No." onChange={this.props.onChange} />
        </FormGroup>
        
        <FormGroup style={{border:this.props.error && (this.props.error.indexOf('Date') !== -1 || this.props.error.indexOf('Invalid') !== -1)?'1px solid red':''}}>
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