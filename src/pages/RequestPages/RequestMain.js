import React from "react";
import Page from "../../components/Page";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Active from "./Active";
import Completed from "./Completed";
import { connect } from "react-redux";
import { loadGuestRequests } from "../../actions";
import { bindActionCreators } from "redux";

class RequestMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.generateAvtiveData = this.generateAvtiveData.bind(generateAvtiveData)
    // this.generateCompletedData = this.generateCompletedData.bind(generateCompletedData)
    this.state = {
      activeTab: "1"
    };
  }

  componentWillMount() {
    let data = {
      roomNo: localStorage.getItem("roomNo"),
      user_last_name: localStorage.getItem("guestName")
    };
    this.props.actions.loadGuestRequests(data);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

generateAvtiveData = () => {
  let activeGuestRequests = this.props.requests && this.props.requests.filter(request => request.completedAt == null)
  return activeGuestRequests;
}

generateCompletedData = () => {
  let activeGuestRequests = this.props.requests && this.props.requests.filter(request => request.completedAt != null)
  return activeGuestRequests;
}

  render() {

    return (
      <div>
        <Page>
          <div className="tabRequestMain">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Active
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Completed
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Active data={this.generateAvtiveData()} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Completed data={this.generateCompletedData()} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Page>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // reducers function name and action name
    requests: state.guestRequests.requests
  };
}

const  mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        loadGuestRequests
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestMain);
