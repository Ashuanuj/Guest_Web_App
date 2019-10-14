import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Form } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import TextInput from "../components/forms/TextInput";
import DatePicker from "./forms/DatePicker";
import DatePickerInput from "./forms/DatePickerInput";
import moment from "moment";

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
    return (
      <Col className="form-main">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Field
            component={TextInput}
            name="name"
            label="Name"
            onChange={this.props.onChange}
          />
          <Field
            component={TextInput}
            name="roomno"
            label="Room No."
            onChange={this.props.onChange}
          />
          {/* <Field
            name="datePicker"
            label="Date of Birth"
            component={DatePicker}
            value={this.state.time}
            isOpen={this.state.isOpen}
            onSelect={this.handleSelect}
            onCancel={this.handleCancel}
          /> */}
          {/* </Field> */}
          {/* <DatePicker
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel} /> */}
          <Field
            component={TextInput}
            name="dob"
            label="Date of Birth"
            type="date"
            value=""
          />
          {/* <Field
          name="dob"
          placeholderText="Date of Birth"
          inputValueFormat="MM/DD/YYYY"
          fixedHeight
          normalize={value => (value ? moment(value).format('MM/DD/YYYY') : null)}
          component={DatePickerInput}
          onChange={this.props.onChange} */}
          />
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

export default reduxForm({
  form: "guestForm"
})(RequestForm);
