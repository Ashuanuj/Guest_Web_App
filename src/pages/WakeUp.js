import React from 'react';
import {Row,Button,Table,FormGroup,Label,CustomInput } from 'reactstrap';
import Page from '../components/Page'
import {Link} from 'react-router-dom';
import history from '../helper/history';

export default class CheckoutPage extends React.Component{
    constructor(props){
        super(props)
        // this.handleClick = this.handleClick.bind(handleClick)
    }

    handleClick = (link) => {
        history.push(link)
    }

    render(){
        return(
            <div>
                <Page>
                <Row className="wakeup-div"> 
                <Table className="tableRadio">
                    <tbody className="radio-div">
                            <tr>
                                <>
                            <FormGroup row className="table-div">
                             <Label className="label" for="exampleCheckbox">Select a Slot : </Label>
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Now" inline 
                               />
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Later" inline 
                                defaultChecked
                                />
                            </FormGroup>
                               </>
                            </tr>
                    </tbody>
                </Table>
                <div  className="note-text"> E.g. Wake me up at 7am sharp tomorrow </div>

                <div className="WakeupRequestBtn-div" >
                        <Button
                            size="lg"
                            className="btnCancel btn-outline-info"
                            onClick={() => this.handleClick('/frontoffice')}
                            >
                               Cancel
                        </Button>
                        <Button
                            size="lg"
                            className="btnReqt bg-gradient-Requestbtn btn-outline-info border-0"
                            onClick={() => this.handleClick('/requestmain')}
                            >
                               Request
                        </Button>
                 </div>
                </Row>

                </Page>
            </div>
        );
    }
}