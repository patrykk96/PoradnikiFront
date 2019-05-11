
import React from "react";

import { Link, Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";

import Spinner from '../../components/Spinner';

import {
    Alert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Row,
    Col,
    FormFeedback
  } from "reactstrap";
  

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: true,
      newPassword: "",
      repeatNewPassword: "",
      username: null,
      code: null
    };
  }

  componentDidMount() {
    this.props.resetErrors();
    this.setState({
      username: this.props.match.params.username,
      code: this.props.match.params.code
    });
  }


  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
  });
  };

  submitChangePassword = (event) => {

      event.preventDefault();

      if (this.state.newPassword === this.state.repeatNewPassword) {
        this.setState({validate: true})
      } else {
        this.setState({validate: false})
      }
      
      if (this.state.validate) {
        this.props.changePassword(this.state.username, this.state.code, this.state.newPassword);
      }
  }
  
  render() {
    return (
        <div className="content">
        <br/>
        <Row>
        <Col className="ml-auto mr-auto text-center" md="3">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">
              <span className="tim-icons icon-lock-circle text-info"
                      data-notify="icon"/>{" "} Zmiana hasła
              </CardTitle>
            </CardHeader>
            <CardBody>
             
             <form onSubmit={this.submitChangePassword}><Label>Podaj nowe hasło</Label><FormGroup>
                <Input
                    name="newPassword"
                    defaultValue=""
                    placeholder="Nowe hasło"
                    autoComplete="off"
                    type="password"
                    maxLength="25"
                    minLength="4"
                    required
                    onChange={event => this.handleInputChange(event)}
                    />
            </FormGroup>
            
            <FormGroup>
                <Input
                    name="repeatNewPassword"
                    defaultValue=""
                    placeholder="Powtórz nowe hasło"
                    autoComplete="off"
                    type="password"
                    maxLength="25"
                    minLength="4"
                    invalid={!this.state.validate}
                    required
                    onChange={event => this.handleInputChange(event)}
                    />
                    <FormFeedback invalid>
                    Podane hasła różnią się.
                  </FormFeedback>
            </FormGroup>
            
            <Button color="primary" className="btn-simple" >Zmień hasło</Button>

            {!this.props.loading ? <>  
            {this.props.error !== null ? <><br/><br/><Alert color="danger">{this.props.error}</Alert></> : <></>}
            {this.props.changePasswordResult === 200 && this.props.error === null ? <><br/><br/><Alert color="success">Hasło zostało zmienione</Alert> <Label> Przejdź do <Link to="/auth/login">logowania.</Link></Label></> : <></>}</> 
             : <Spinner/>}


            </form><br/>
            <Label>Wróć do <Link to="/">strony głównej.</Link></Label>
           
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
    changePassword: (username, code, newPassword) => dispatch(actions.changePassword(username, code, newPassword)),
    resetErrors: () => dispatch(actions.resetErrors())
  };
};

const mapStateToProps = state => {
  return {
    changePasswordResult: state.authReducer.changePasswordResult,
    error: state.authReducer.error,
    loading: state.authReducer.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
