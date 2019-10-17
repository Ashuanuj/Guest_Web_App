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
  ModalFooter,
  Input
} from "reactstrap";
import Page from "../components/Page";
//import setAuthData from "../utility/auth";
import vegImg from "../components/assets/img/icons/veg.png";
import NonvegImg from "../components/assets/img/icons/non-veg.png";
import TextInput from '../components/forms/TextInput';
import { Field,reduxForm } from 'redux-form';
import patternImg from "../components/assets/img/icons/linear-design.png"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import history from "../helper/history";

import { createRequest, getCartItems } from "../actions";

let totalBill = 0;
class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      totalBill: 0,
      Nonveg: NonvegImg,
      veg: vegImg,
      totalItems: 0,
      totalRate: 0,
      value:0
    };

    this.toggle = this.toggle.bind(this);
    this.anotherToggle = this.anotherToggle.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange=this.onChange.bind(this)
  }
  
  onChange(event){
    this.setState({value: 1});
    console.log(event,';;;;;;;;;;;;;;;;;;;;;;;;')
   localStorage.setItem('instructions',event.target.value)
  }
  // componentWillMount() {
  //   this.props.actions.getCartItems(localStorage.getItem('areaId'))
  // }
  
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
    localStorage.removeItem('amount');
    this.props.cartItems.forEach(item => localStorage.removeItem(item.id))
  }
  
  handleAddItem(id) {
    let index = this.props.subcategory.findIndex(item => item.id === id)
    this.props.subcategory[index].accept = true
    this.props.subcategory[index].selectedItems += 1
    this.props.subcategory[index].itemsRate += parseFloat(this.props.cartItems[index].rate)
    
    this.setState({
      [`add${id}`]: this.state[`add${id}`] == undefined ? this.state[`add${id}`] = true : this.state[`add${id}`] == true ? this.state[`add${id}`] = false : this.state[`add${id}`] == true,
      [`selectedItem${id}`]: this.state[`selectedItem${id}`] = this.props.cartItems[index].selectedItems,
      totalItems: this.state.totalItems + 1,
      totalRate: this.state.totalRate + parseFloat(this.props.cartItems[index].rate)
    })
  }

  onIncrement(id) {
    let index = this.props.cartItems.findIndex(item => item.id === id)
    this.props.cartItems[index].quantity = localStorage.getItem(id) != null ? localStorage.getItem(id) + 1 : this.props.cartItems[index].quantity + 1
    this.props.cartItems[index].amount = localStorage.getItem('amount') != null ? localStorage.getItem('amount') + parseFloat(this.props.cartItems[index].rate) : this.props.cartItems[index].amount + parseFloat(this.props.cartItems[index].rate)

    this.setState({
      [`selectedItem${id}`]: this.state[`selectedItem${id}`] = this.props.cartItems[index].quantity,
      totalItems: this.state.totalItems + 1,
      totalRate: this.state.totalRate + parseFloat(this.props.cartItems[index].rate)
    });
    localStorage.setItem(id, this.props.cartItems[index].quantity)
    localStorage.setItem('amount', this.props.cartItems[index].amount)
  }

  onDecrement(id) {
    let index = this.props.cartItems.findIndex(item => item.id === id)
    console.log(this.state.totalRate,';;;;;',this.props.cartItems[index].rate)
    this.setState({
      [`selectedItem${id}`]: this.state[`selectedItem${id}`] = this.props.cartItems[index].quantity,
      totalItems: this.state.totalItems > 0 && this.props.cartItems[index].quantity > 0 ? this.state.totalItems - 1 : this.state.totalItems, 
      totalRate: this.state.totalItems > 0 && this.props.cartItems[index].quantity > 0 ? this.state.totalRate - parseFloat(this.props.cartItems[index].rate) : 0
    })
    this.props.cartItems[index].quantity = this.props.cartItems[index].quantity > 0 ? this.props.cartItems[index].quantity - 1 : 0
    this.props.cartItems[index].amount = this.props.cartItems[index].quantity > 0 && this.props.cartItems[index].amount > 0 ? this.props.cartItems[index].amount - parseFloat(this.props.cartItems[index].rate) : 0
    this.props.cartItems[index].accept =  this.props.cartItems[index].quantity == 0 ? false : true
    localStorage.setItem(id, this.props.cartItems[index].quantity)
    // localStorage.setItem(this.props.cartItems[index].itemName, this.props.cartItems[index].quantity)
    localStorage.setItem('amount', this.props.cartItems[index].amount)
  }

  render() {
    const { props } = this;
    localStorage.setItem('cartcount',props.cartItems.length)
    if(this.state.value==0){
      localStorage.setItem('instructions','')
      //localStorage.setItem('cartcount',0)
    }
    //setAuthData(this.props.)
    totalBill=0

    let item = props.cartItems && props.cartItems.map((item, index) => {
        
            totalBill = item.quantity != 0 && localStorage.getItem(item.id) != 0 && localStorage.getItem('amount') == null ? totalBill + item.amount : localStorage.getItem('amount')
          let item1 = 
        item.quantity != 0 && localStorage.getItem(item.id) != 0 ?
        <tr className="items-gap">
          <td className="checkout-item-name">
            <Media object src={this.state[item.type]} alt="image" /> {item.itemName}
          </td>
          <td>
            <div className="qtybtn">
              <span className="minus" onClick={() => this.onDecrement(item.id)}> - </span>
              <span className="count"> {localStorage.getItem(item.id) !== null ? localStorage.getItem(item.id) : item.quantity} </span>
              <span className="plus" onClick={() => this.onIncrement(item.id)}> + </span>
            </div>
          </td>
          <td className="checkout-item-amt"> {localStorage.getItem(item.id) !== null ? `$ ${localStorage.getItem(item.id)* item.rate}` : `$ ${item.amount}`} </td>
        </tr> : ''
          return item1
      });

    return (
      <div>
        <Page>
        <Row className="checkout-div">
          <Table responsive className="TableMainList">
            <tbody className="t-body">
             {item}
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
              <FormGroup>
              <Input component={TextInput} name="Instructions" placeholder="Instructions ? E.g.Don’ t ring the doorbell"  onChange={this.onChange.bind(this)}  />
              </FormGroup>
            </div>
            <Table className="bill-amt">
              <tbody className="radio-div">
                <tr>
                  <td className="totaltext"> Total Bill </td> 
                  <td></td>
                  <td className="totalamt"> {totalBill} </td>
                </tr>
              </tbody>
            </Table>
            <div className="pattern-img">
            <img
                src={patternImg}
                className=""
                alt="cmp"
              />
            </div>
            <div className="confirmBtn-div">
              <Button
                size="lg"
                className="confirmBtn bg-gradient-Requestbtn border-0"
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
          toggle={this.toggle}
          className="modal-div"
        >
          <ModalHeader toggle={this.toggle}>
            
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
    cartItems: state.checkoutReducers.requests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        createRequest,
        getCartItems
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
