import React from "react";
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import Guide from "../components/Guides/Guide";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Table,
  CardTitle,
  Button
} from "reactstrap";

class UserGuides extends React.Component {
    state = {
      showAddGuide: false
    }

    componentDidMount = () => {
        this.props.getUser(13);
    }

    showAddGuide = () => {
      this.setState(prevState => ({
        showAddGuide: !prevState.showAddGuide
      }));
    }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                <CardTitle tag="h3">
                <i className="tim-icons icon-bulb-63 text-success" />{" "}
                  Twoje poradniki
                  {this.props.isAuthenticated ? <Button
                      onClick={this.showAddGuide}
                      color="success"
                     className="float-right btn-simple">Dodaj poradnik</Button> : null} 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table className="tablesorter" responsive>
                      <tbody>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
      getUser: (userId) => dispatch(userActions.getUser(userId))
    };
  };
  
  const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
      loading: state.gameReducer.loading,
      error: state.gameReducer.error
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGuides);


