import React from 'react';

// import {Row, Col, Card, Media} from 'reactstrap';
// import { MdKeyboardArrowRight } from 'react-icons/md';

import {Row, Col, Card, Media,Collapse,Table} from 'reactstrap';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

import vegImg from '../../components/assets/img/icons/veg.png';
import NonvegImg from '../../components/assets/img/icons/non-veg.png'


// const navComponents = [
//   {  exact: false },
// ];


export default class Active extends React.Component{
  constructor(props) {
      super(props)
      this.state = { collapseID: "", } 
  }
    
    
    toggleCollapse = collapseID => () => { this.setState(prevState => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : "" })); }    

    render(){
        console.log(this.props)
        return(

            <div>
               
               <Row className="ServicePageMainActive">
                <Col md={6} sm={6} xs={12} className="pz">
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

                <Col md={6} sm={6} xs={12} className="pz">
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
                <Col md={6} sm={6} xs={12} className="pz">
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
                </Col>
                </Row>
             
            </div>
        );
    }
}