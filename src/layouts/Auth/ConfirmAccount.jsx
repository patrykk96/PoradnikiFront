
import React from "react";

import { Link, Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";

import Spinner from '../../components/Spinner';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    Alert
  } from "reactstrap";
  

class ConfirmAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
          username: "",
          password: "",
        }
    };
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    let code = this.props.match.params.code;
    this.props.confirmAccount(username, code);
  }

  
  render() {
    return (
        <div className="content">
        <br/>
        <Row>
        <Col className="ml-auto mr-auto text-center" md="4">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">
              <big><i className="tim-icons icon-email-85 text-success"
                      data-notify="icon"
                    /></big> Potwierdź email
              </CardTitle>
            </CardHeader>
            <CardBody>
              {!this.props.loading ? <>  
            {this.props.isConfirmedAccount === 400 ? <><Alert color="danger">Wystąpił błąd podczas potwierdzenia adresu email</Alert> <Label> Przejdź do <Link to="/">strony głównej.</Link></Label></>: <></>}
            {this.props.isConfirmedAccount === 200 ? <><Alert color="success">Gratulacje! Konto zostało utworzone</Alert> <Label> Przejdź do <Link to="/auth/login">logowania.</Link></Label></> : <></>}</> 
             : <Spinner/>}

            </CardBody>
          </Card>
        </Col>
        </Row>
        </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    confirmAccount: (username, code) => dispatch(actions.confirmAccount(username, code))
  };
};

const mapStateToProps = state => {
  return {
    isConfirmedAccount: state.authReducer.confirmAccount,
    loading: state.authReducer.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmAccount);
