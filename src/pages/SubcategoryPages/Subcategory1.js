import React, { Component } from 'react';
import { Row,Col,Card,Media,Button } from 'reactstrap';
// import{Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {subCategory} from '../../actions'

class SubCategory1 extends Component {
  componentWillMount() {
    this.props.actions.subCategory();
  }

  render(){
    const {props} = this;
    console.log(props, 'Service props data');
    const subCategoryitems = props.subcategory && props.subcategory.map(data =>(
     <Col lg={4} md={6} sm={6} xs={12} className="" key={data.id} >
      <Card className="">
       <Media className="SubcategoryMain">
          <Media left>
            <Media object src={data.image} alt="image"/>
          </Media>
            <Media body>
              <Media heading>
                <Media object src={data.icon} alt="image"/>{data.Title}
              </Media>
                <span className="items-list"> {data.SubTitle} </span>
                <b> {data.rate}</b>
            </Media>
            {/* <Link to={`/${data.link}`} > */}
              <Media right>
                <Button className="addbtn ">Add</Button>
              </Media>
            {/* </Link> */}
       </Media>
      </Card> 
    </Col>
    ));
    return (
     <div className='tabContent'>
       <Row className="ServicePageMain">
         {subCategoryitems}
       </Row>
     </div>
    );
  }
}

SubCategory1.propTypes = {
  actions: PropTypes.object.isRequired,
  subcategory: PropTypes.array.isRequired,
};

function mapStateToProps(state)
{
     return {
       // reducers function name and variable name 
       subcategory: state.subCategory.subCategory,
     };
}

function mapDispatchToProps(dispatch)
{
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