
import React from 'react';
import { Row,Col,Card,Media } from 'reactstrap';
import Page from '../components/Page';
import {Link} from 'react-router-dom';

import {  MdKeyboardArrowRight } from 'react-icons/md';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {loadCategory} from '../actions'

class ServicesPage extends React.Component {

  componentWillMount() {
    this.props.actions.loadCategory();
  }

  render(){
    const {props} = this;
    console.log(props, 'Service props data');
    
    const servicesCategory = props.category && props.category.map(requestCategory =>(
      <Col lg={4} md={6} sm={6} xs={12} className="mb-3" key={requestCategory.id}>
        <Link to={`/${requestCategory.link}`} >
          <Card className="card-serv-main">
           <Media className="mediaMain">
              <Media left>
                <Media object src={requestCategory.icon} alt="image"/>
              </Media>
              <Media body>
                  <Media heading>
                        {requestCategory.categoryTitle}
                  </Media>
                   <span className="sub-title"> {requestCategory.categorySubTitle} </span>
              </Media> 
              <Media right>
                <Link to={`/${requestCategory.link}`} > 
                  <MdKeyboardArrowRight/>
                </Link>
              </Media>
           </Media>
          </Card> 
          </Link>
        </Col>
       ));
    return(

      <div>
        <Page>
          <Row className="ServicePageMain">
            {servicesCategory}
          </Row>
       </Page>
      </div>
      );
  }
}

ServicesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  category: PropTypes.array.isRequired,
};

function mapStateToProps(state)
{
     return {
       // reducers function name and action name
       category: state.serviceCategoryReducers.Category,
     };
}

function mapDispatchToProps(dispatch)
{
     return {
          actions: bindActionCreators({
            loadCategory
          }, dispatch),
     };
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(ServicesPage);