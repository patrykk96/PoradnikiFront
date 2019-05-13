import React from "react";
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from "reactstrap";

class UserGuides extends React.Component {


    componentDidMount = () => {
        this.props.getUser(13);
    }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  Tutaj będą poradniki użytkownika
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


