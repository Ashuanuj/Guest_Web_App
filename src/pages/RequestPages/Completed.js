import React from 'react';
import {Row, Col, Card, Media} from 'reactstrap';
import {  MdKeyboardArrowRight } from 'react-icons/md';

export default class Completed extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
               
               <Row className="ServicePageMainActive">
                <Col lg={4} md={6} sm={6} xs={12} className="pz">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3458
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title3"> Closed </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="pz">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3457
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title3"> Closed  </span>
                            </Media>
                        <Media right>
                        <MdKeyboardArrowRight/>
                        </Media>
                    </Media>
                    </Card> 
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="pz">
                    <Card className="requestTab-main">
                    <Media className="mediaMain">
                            <Media body>
                            <Media heading>
                            Order ID: 3456
                            </Media>
                            <span className="sub-title">23 Jun 2019 | 7:30am</span>
                            <span className="sub-title3"> Closed  </span>
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