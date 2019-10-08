import React, { Component } from 'react';
import { Row, Col, Card, Media, Button } from 'reactstrap';
// import{Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { subCategory } from '../../actions'

class SubCategory1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: false,
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }
  componentWillMount() {
    this.props.actions.subCategory();    
  }

  handleAddItem(id) {
    let index = this.props.subcategory.findIndex(item => item.id === id)
    console.log(index);
    this.props.subcategory[index].accept = true
    
    this.setState({
      [`add${id}`]: this.state[`add${id}`] == undefined ? this.state[`add${id}`] = true : this.state[`add${id}`] == true ? this.state[`add${id}`] = false : this.state[`add${id}`] == true
    })
  }

  onIncrement(id) {
    let index = this.props.subcategory.findIndex(item => item.id === id)
    console.log(index);
    this.props.subcategory[index].selectedItems += 1
    console.log(this.props.subcategory)
  }

  onDecrement(id) {
    let index = this.props.subcategory.findIndex(item => item.id === id)
    console.log(index);
    this.props.subcategory[index].selectedItems = this.props.subcategory[index].selectedItems !== 0 ? this.props.subcategory[index].selectedItems - 1 : ''
    console.log(this.props.subcategory)
  }

  handleContinue() {

    console.log("continue");
  }

  render() {
    const { props } = this;
    console.log(props, 'Service props data');
    const subCategoryitems = props.subcategory && props.subcategory.map(data => (
      <Col lg={4} md={6} sm={6} xs={12} className="" key={data.id} >
        <Card className="">
          <Media className="SubcategoryMain">
            <Media left>
              <Media object src={data.image} alt="image" />
            </Media>
            <Media body>
              <Media heading>
                <Media object src={data.icon} alt="image" />{data.Title}
              </Media>
              <span className="items-list"> {data.SubTitle} </span>
              <b> {data.rate}</b>
            </Media>

            <Media right>
              <Button className="addbtn " style={{ display: !this.state[`add${data.id}`] ? "block" : "none" }} onClick={() => this.handleAddItem(data.id)}>Add</Button>
              <div className="qtybtn" style={{ display: this.state[`add${data.id}`] ? "block" : "none" }}>
                <span className="minus" onClick={() => this.onDecrement(data.id)}>-</span>
                <span className="count"><b>{data.selectedItems}</b></span>
                <span className="plus" onClick={() => this.onIncrement(data.id)}>+</span>
              </div>
            </Media>

          </Media>
        </Card>
      </Col>
    ));
    return (
      <div className='tabContent'>
        <Row className="ServicePageMain">
          {subCategoryitems}
        </Row>
        <div className="addItem-div">
          <span> {this.state.selectedItems} Items | $22.00</span>
          <Button
            size="lg"
            className="ContinueBtn btn-outline-info"
            onClick={this.handleContinue}
          >
            Continue
            </Button>
        </div>
      </div>
    );
  }
}

SubCategory1.propTypes = {
  actions: PropTypes.object.isRequired,
  subcategory: PropTypes.array.isRequired,

};

function mapStateToProps(state) {
  return {
    // reducers function name and variable name 
    subcategory: state.subCategory.subCategory && state.subCategory.subCategory.map(item => {
      return {
        id: item.id,
        accept: false,
        selectedItems: 0,
        Title: item.Title,
        SubTitle: item.SubTitle,
        icon: item.icon,
        image: item.image,
        rate: item.rate,
        link: item.link
      }
    }),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      subCategory
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubCategory1);