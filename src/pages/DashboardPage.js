
import React from 'react';
import {Row,Col,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';

import Page from '../components/Page';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {loadService} from '../actions'

class DashboardPage extends React.Component {

  componentWillMount() {
    this.props.actions.loadService();
  }

  render(){
    const {props} = this;
    console.log(props, 'dashboard props data');
    
    const services = props.requests && props.requests.map(request =>(
      <Col lg={4} md={6} sm={6} xs={12} className="mb-3" key={request.id}>
        <Link to={`/${request.link}`} >
          <Card className="flex-row card-serv-main">
            <CardImg
              className="card-img-left"
              src={request.icon}
              style={{width:60 , height:60}}
            />
            <CardBody className="pd-10 ">
              <CardTitle>{request.serviceName}</CardTitle>
              <CardText>
                {request.subText}
              </CardText>
            </CardBody>
          </Card>
         </Link>
        </Col>
    ));

    return(
     <div>  
       <Page>      
        <Row className="ServicePageMain">
            {services}
        </Row>
       </Page>
    </div>
   );
  }
}
DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  requests: PropTypes.array.isRequired,
};

function mapStateToProps(state)
{
     return {
       // reducers function name and action name
          requests: state.dashboardServicesReducers.services,
     };
}

function mapDispatchToProps(dispatch)
{
     return {
          actions: bindActionCreators({
            loadService
          }, dispatch),
     };
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(DashboardPage);
