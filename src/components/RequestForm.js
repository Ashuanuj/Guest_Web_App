import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Form } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import TextInput from "../components/forms/TextInput";
import DatePicker from "./forms/DatePicker";
import DatePickerInput from "./forms/DatePickerInput";
import moment from "moment";
import { bindActionCreators } from "redux"
import flow from 'lodash/flow';
import { connect } from "react-redux";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter Name";
  } else if (!values.name.match(/^[a-zA-Z]*$/)) {
    errors.name = "Please enter alphabet characters only.";
  } else if (values.name.length < 3) {
    errors.name = "minimum be 3 characters or more";
  }
  if (!values.roomno) {
    errors.roomno = "please enter Room No.";
  }
  if (!values.dob) {
    errors.dob = "please select your date of birth";
  }
  return errors;
};

const monthMap = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

const dateConfig = {
  year: {
    format: "YYYY",
    caption: "Year",
    step: 1
  },
  month: {
    format: value => monthMap[value.getMonth() + 1],
    caption: "Mon",
    step: 1
  },
  date: {
    format: "DD",
    caption: "Day",
    step: 1
  }
};

class RequestForm extends React.Component {
  state = {
    time: new Date(),
    isOpen: false
  };
  handleClick = () => {
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleSelect = time => {
    this.setState({ time, isOpen: false });
  };
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(this.props, '6666666666666666666666666666666666666666666666')
    return (
      <Col className="form-main">
        <Form onSubmit={handleSubmit} autoComplete="off">
        <div style={{height: 'fit-content',border: this.props.error && (this.props.error.indexOf('Guest') !== -1 || this.props.error.indexOf('Invalid') !== -1) ?"1px solid red" : ''}}>
          <Field
            component={TextInput}
            name="name"
            label="Name"
            onChange={this.props.onChange}
          />
          </div>
          <div style={{height: 'fit-content',border: this.props.error && (this.props.error.indexOf('Room') !== -1 || this.props.error.indexOf('Invalid') !== -1) ?"1px solid red" : ''}}>
          <Field
            component={TextInput}
            name="roomno"
            label="Room No."
            onChange={this.props.onChange}
          />
          </div>
          <div style={{ height: 'fit-content', border: this.props.error && (this.props.error.indexOf('Date') !== -1 || this.props.error.indexOf('Invalid') !== -1) ?"1px solid red" : ''}}>
          <Field
            component={TextInput}
            name="dob"
            label="Date of Birth"
            type="date"
            value=""
          />
          </div>
          <Button
            size="lg"
            disabled={pristine || submitting}
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
  handleSubmit: PropTypes.func.isRequired
};

// export default reduxForm({
//   form: 'guestForm',
//   validate,
// })(RequestForm);

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
