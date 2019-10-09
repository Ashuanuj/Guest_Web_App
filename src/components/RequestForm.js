import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../components/forms/TextInput';
// import DatePickerInput from './forms/DatePickerInput';
// import moment from 'moment';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Please enter Name'
  } else if (!values.name.match(/^[a-zA-Z]*$/)) {
    errors.name = 'Please enter alphabet characters only.'
  } else if (values.name.length < 3) {
    errors.name = 'minimum be 3 characters or more'
  }
  if (!values.roomno) {
    errors.roomno = 'please enter room no.'
  }
  if (!values.dob) {
    errors.dob = 'please select your date of birth'
  }
  return errors
}

let RequestForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <Col className="form-main">
      <Form onSubmit={handleSubmit} autoComplete="off">

        <Field component={TextInput} name="name" label="Name" onChange={props.onChange} />

        <Field component={TextInput} name="roomno" label="Room No." onChange={props.onChange} />
    
        <Field component={TextInput} name="dob" label="Date of Birth" type="date" value="2019-10-04"/>
        {/* <Field
          name="dob"
          placeholderText="Date of Birth"
          inputValueFormat="MM/DD/YYYY"
          fixedHeight
          normalize={value => (value ? moment(value).format('MM/DD/YYYY') : null)}
          component={DatePickerInput}
          onChange={props.onChange}
        /> */}

       
        <Button
          size="lg"
          disabled={pristine || submitting}
          className="Requestbtn bg-gradient-Requestbtn btn-outline-info border-0"
          block
        >
          REQUEST ACCESS
        </Button>
        
      </Form>
    </Col>

  );
}

RequestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'guestForm',
  validate,
})(RequestForm);