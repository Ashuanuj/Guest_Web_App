import React from 'react';
import {Row,Button,Table,FormGroup,Label,CustomInput } from 'reactstrap';
import Page from '../components/Page'

export default class CheckoutPage extends React.Component{

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

                <div className="WakeupRequestBtn-div" style={{position: "fixed", bottom: 0}}>
                        <Button
                            size="lg"
                            className="btnCancel btn-outline-info"
                            >
                               Cancel
                        </Button>
                        <Button
                            size="lg"
                            className="btnReqt bg-gradient-Requestbtn btn-outline-info border-0"
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