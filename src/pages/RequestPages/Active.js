import React from 'react';

// import {Row, Col, Card, Media} from 'reactstrap';
// import { MdKeyboardArrowRight } from 'react-icons/md';

import {Row, Col, Card, Media,Collapse,Table} from 'reactstrap';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

import vegImg from '../../components/assets/img/icons/veg.png';
import NonvegImg from '../../components/assets/img/icons/non-veg.png'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadGuestRequests } from "../../actions";

// const navComponents = [
//   {  exact: false },
// ];


class Active extends React.Component{
  constructor(props) {
      super(props)
      this.state = { collapseID: "", veg: vegImg, Nonveg: NonvegImg } 
  }
    
  componentWillMount() {
    let data = {
      roomNo: localStorage.getItem("roomNo"),
      user_last_name: localStorage.getItem("guestName")
    };
    this.props.actions.loadGuestRequests(data);
  }
    
    toggleCollapse = (collapseID, orderId) => () => { 
        console.log(this.state, 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
        this.setState(prevState => ({ [`collapseID${orderId}`]: prevState[`collapseID${orderId}`] !== collapseID ? collapseID : "" })); }    

    render(){
        console.log(this.props)
        console.log(
            this.props,
            "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
          );
          let data = this.props.data && this.props.data.map((item, index) => {
              let total = 0;
              return (
                  <Col md={6} sm={6} xs={12} className="mb-3">
                  <Card className="requestTab-main">
                    <Media className="mediaMain">
                      <Media body>
                        <Media heading>{`Order ID: ${item.orderId}`}</Media>
                        <span className="sub-title">{item.created_at}</span>
                        {/* //23 Jun 2019 | 7:30am */}
                        <span className="sub-title2"> Request Received </span>
                      </Media>
                      <Media right>
                        <MdKeyboardArrowDown
                          onClick={this.toggleCollapse("basicCollapse", item.orderId)}
                          style={{
                            transform: this.state[`collapseID${item.orderId}`]
                              ? "rotate(0deg)"
                              : "rotate(-90deg)",
                            transitionDuration: "0.3s",
                            transitionProperty: "transform"
                          }}
                        />
                      </Media>
                    </Media>
                    <Collapse id="basicCollapse" isOpen={this.state[`collapseID${item.orderId}`]}>
                      <Table responsive className="TableMainList">
                        <tbody className="t-body">
                            {item.requests && item.requests.map((elem, i) => {
                                total += elem.amount
                                return(
                                <tr>
                                <td>
                                  <Media object src={this.state[elem.type]} alt="image" /> {`${elem.title} x ${elem.quantity}`}
                                </td>
                                <td>-</td>
                                <td> {`$${elem.amount}`} </td>
                              </tr>
                            )})}
                        </tbody>
                      </Table>
                      <Table responsive className="TableMainList">
                        <tbody className="t-body">
                          <tr className="order-total">
                            <td className="totaltext">Total Bill</td>
                            <td>-</td>
                            <td className="totalamt1"> {`$${total}`} </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Collapse>
                  </Card>
                </Col>
              )
          })
        return(

            <div>
               
               <Row className="ServicePageMain">
                   {data}
                {/* <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                            <MdKeyboardArrowDown onClick={this.toggleCollapse("basicCollapse")} 
                            style={{ transform: this.state.collapseID ? 'rotate(0deg)' : 'rotate(-90deg)', 
                            transitionDuration: '0.3s', transitionProperty: 'transform', }} />
                        </Media>
                    </Media>
                    <Collapse id="basicCollapse" isOpen={this.state.collapseID} >
                    <Table responsive className="TableMainList" >
                        <tbody className="t-body">
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Idly Vada x 1
                            </td>
                            <td>  
                              -
                            </td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                               <Media object src={vegImg} alt="image"/> Bread Toast x 2 
                            </td>
                            <td> -</td>
                            <td> $4.00 </td>
                        </tr>
                        <tr>
                            <td>  
                                 <Media object src={NonvegImg} alt="image"/> Omelette x 3
                            </td>
                            <td>- </td>
                            <td> $3.00 </td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table responsive className="TableMainList">
                        <tbody className="t-body">
                            <tr className="order-total">
                                <td className="totaltext">Total Bill</td>
                                <td>-</td>
                                <td className="totalamt1"> $11.00 </td>
                            </tr>
                        </tbody>
                    </Table>
                    </Collapse>
                    </Card> 
                </Col>

                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                         <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3456
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title2"> Request Received </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col> */}
                </Row>
             
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      // reducers function name and action name
      requests: state.guestRequests.requests
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          loadGuestRequests
        },
        dispatch
      )
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Active);