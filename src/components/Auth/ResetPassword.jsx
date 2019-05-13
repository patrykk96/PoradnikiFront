import React from "react";
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../Spinner';

import {
    Alert,
    UncontrolledAlert,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col,
  } from "reactstrap";
  

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ""
    };
  }

  componentDidMount() {
    this.props.resetErrors();
  };


  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
  });
  };

  resetPassword = event => {
    const email = this.state.email;
    event.preventDefault();
    this.props.resetPassword(email);
  };
  
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/'/>;
    }
    return (
        <div className="content">
        <Row>
        <Col className="ml-auto mr-auto text-center" md="4">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">
                Zapomniane hasło?
              </CardTitle>
            </CardHeader>
            <Label>Podaj adres e-mail, a otrzymasz link, który posłuży do zmiany hasła.</Label>
            <CardBody>
            <form onSubmit={this.resetPassword}>
                <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                    <Input
                        name="email"
                        defaultValue=""
                        placeholder="E-mail"
                        autoComplete="off"
                        type="email"
                        maxLength="25"
                        required
                        onChange={event => this.handleInputChange(event)}
                        />
                </InputGroup>
                
                <Button color="danger" className="btn-simple">Potwierdź</Button>
            
            </form>
            {!this.props.loading ? <>{this.props.resetPasswordResult && this.props.error === null ? <><br/>
            <Alert color="success">
                    Wysłano e-mail z linkiem do zmiany hasła
            </Alert></>
             : <></>} 
            

            {this.props.error !== null ?  <> <br/>
           <UncontrolledAlert color="danger">
                    <span>
                      {this.props.error}
                    </span>
                  </UncontrolledAlert>
           </> : <></>}</> : <Spinner/>}
            <br/>
                  <Label>Wróć do <Link to="/">strony głównej</Link> lub do <Link to="/auth/login">logowania.</Link></Label>
            
            </CardBody>
            
          </Card>
        </Col>
        </Row>
        </div>
    );
  }
}

export default ResetPassword;
