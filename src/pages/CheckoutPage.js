import React from "react";
import {
  Row,
  Media,
  Table,
  FormGroup,
  Label,
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Page from "../components/Page";

import vegImg from "../components/assets/img/icons/veg.png";
import NonvegImg from "../components/assets/img/icons/non-veg.png";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import history from "../helper/history";
import { Link } from "react-router-dom";

import { createRequest } from "../actions";

let totalBill = 0;
class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      totalBill: 0
    };

    this.toggle = this.toggle.bind(this);
    this.anotherToggle = this.anotherToggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  anotherToggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    let _data = this.props.cartItems;
    this.props.actions.createRequest(_data);
    history.push("/requestmain");
  }

  render() {
    const { props } = this;
    let item = props.cartItems && props.cartItems.map((item, index) => {
        let item1;
        if (item.accept){
            totalBill += item.itemsRate
          item1 = 
                <tr>
                  <td>
                    <Media object src={vegImg} alt="image" /> {item.Title}
                  </td>
                  <td>
                    <div className="qtybtn">
                      <span className="minus"> - </span>
                      <span className="count"> {item.selectedItems} </span>
                      <span className="plus"> + </span>
                    </div>
                  </td>
                  <td> {`$ ${item.itemsRate}`} </td>
                </tr>
          }
          return item1
      });

    return (
      <div>
        <Page>
          <Row className="checkout-div">
            <Table responsive className="TableMainList">
              <tbody className="t-body">
                <tr>
                  {/* <td>
                    <Media object src={vegImg} alt="image" /> {item.Title}
                  </td>
                  <td>
                    <div className="qtybtn">
                      <span className="minus"> - </span>
                      <span className="count"> {item.selectedItems} </span>
                      <span className="plus"> + </span>
                    </div>
                  </td>
                  <td> {`$ ${item.itemsRate}`} </td> */}
                  {item}
                </tr>
                {/* <tr>
                  <td>
                    <Media object src={vegImg} alt="image" /> Bread Toast
                  </td>
                  <td> - </td> <td> $4 .00 </td>
                </tr>
                <tr>
                  <td>
                    <Media object src={NonvegImg} alt="image" /> Omelette
                  </td>
                  <td> - </td> <td> $3 .00 </td>
                </tr> */}
              </tbody>
            </Table>
            <Table className="tableRadio">
              <tbody className="radio-div">
                <tr>
                  <FormGroup row className="table-div">
                    <Label className="label" for="exampleCheckbox">
                      
                      Select a Slot:
                    </Label>
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio"
                      name="customRadio"
                      label="Now"
                      inline
                      defaultChecked
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio2"
                      name="customRadio"
                      label="Later"
                      inline
                    />
                  </FormGroup>
                </tr>
              </tbody>
            </Table>
            <div className="note-text-checkout">
              
              <span> Instructions ? E.g.Don’ t ring the doorbell </span>
            </div>
            <Table className="bill-amt">
              <tbody className="radio-div">
                <tr>
                  <td className="totaltext"> Total Bill </td> <td> - </td>
                  <td className="totalamt"> {totalBill} </td>
                </tr>
              </tbody>
            </Table>
            <div className="confirmBtn-div">
              <Button
                size="lg"
                className="confirmBtn bg-gradient-Requestbtn btn-outline-info border-0"
                block
                onClick={this.toggle}
              >
                Confirm Order
              </Button>
            </div>
          </Row>
        </Page>
        {/* confirmation modal */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.anotherToggle}
          className="modal-div"
        >
          <ModalHeader toggle={this.anotherToggle}>
            
            Confirmation Message
          </ModalHeader>
          <ModalBody>Body Copy Message </ModalBody>
          <ModalFooter>
            <Button
              className="okBtn bg-gradient-Requestbtn border-0"
              onClick={this.anotherToggle}
            >
              
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  actions: PropTypes.object,
  checkout: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    checkout: state.checkoutReducers.checkout,
    cartItems: state.subCategory.cartItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        createRequest
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
