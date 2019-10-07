import React, { Component } from 'react';
import { Row,Col,Card,Media,Button } from 'reactstrap';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {subCategoryQty} from '../../actions'

class SubCategory2 extends Component {

  componentWillMount() {
    this.props.actions.subCategoryQty();
  }

  render() {
    const {props} = this;
    console.log(props, 'Service sub category 2 props data');
    const subCategoryitems = props.subcategory && props.subcategory.map(data =>(
      <Col lg={4} md={6} sm={6} xs={12} className="" key={data.id}>
      <Card className="">
        <Media className="SubcategoryMain">
          <Media left>
            <Media object src={data.image} alt="image"/>
          </Media>
            <Media body>
              <Media heading>
                <Media object src={data.icon} alt="image"/> {data.Title}
              </Media>
                <span className="items-list"> {data.SubTitle} </span>
                <b> {data.rate}</b>
            </Media>
            <div className="qtybtn"> 
             <span className="minus">-</span>
             <span className="count"><b>2</b></span>
             <span className="plus">+</span>
            </div>
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
          <span>2 Items | $22.00</span>
              <Button
                  size="lg"
                  className="ContinueBtn btn-outline-info"
                  >
                      Continue
              </Button>
        </div>
        
      </div>
    );
  }
}


SubCategory2.propTypes = {
  actions: PropTypes.object.isRequired,
  subcategory: PropTypes.array.isRequired,
};

function mapStateToProps(state)
{
     return {
       // reducers function name and variable name 
       subcategory: state.subCategoryQty.sub_Category,
     };
}

function mapDispatchToProps(dispatch)
{
     return {
          actions: bindActionCreators({
            subCategoryQty
          }, dispatch),
     };
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(SubCategory2);