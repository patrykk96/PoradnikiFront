import React from "react";
import { Link, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Spinner from '../Spinner';

import {
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
    UncontrolledAlert,
  } from "reactstrap";


  const responseFacebook = (response) => {
    console.log(response);
  }

class Login extends React.Component {
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
    this.props.resetErrors();
  };

  componentWillUnmount() {
    if(this.props.error) {
      window.location.reload();
    }
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
  });
  };

  submitLogin = event => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    event.preventDefault();
    this.props.login(user);
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
                Zaloguj się
              </CardTitle>
            </CardHeader>
            <Label>Podaj login i hasło </Label>
            <CardBody>

              <form onSubmit={this.submitLogin}>
            <FormGroup>
                <Input
                    name="username"
                    defaultValue=""
                    placeholder="Login"
                    autoComplete="off"
                    type="text"
                    maxLength="25"
                    minLength="4"
                    required
                    // valid={(this.props.error !== null)}
                    // invalid={(this.props.error !== null)}
                    onChange={event => this.handleInputChange(event)}
                    />
                    {/* <FormText>
                    That's a tasty looking email you've got there.
                  </FormText>
                  <FormFeedback valid>
                    That's a tasty looking email you've got there.
                  </FormFeedback> */}
            </FormGroup>
            
            <FormGroup>
                <Input
                name="password"
                defaultValue=""
                placeholder="Hasło"
                autoComplete="off"
                type="password"
                maxLength="25"
                minLength="4"
                required
                onChange={event => this.handleInputChange(event)}
            />
            <Link to="/auth/resetPassword"><small>Nie możesz się zalogować?</small></Link>
            
            </FormGroup>

                <Button color="info" className="btn-simple" >Zaloguj</Button> 
                
              {this.props.loading ? <Spinner/> : <> </>}
            
           {this.props.error !== null ?  <> <br/><br/>
           <UncontrolledAlert color="danger">
                    <span>
                      {this.props.error.error}
                    </span>
                  </UncontrolledAlert>
           </> : <></>}
                       

            </form>

            <br/>
            <Label>... lub zaloguj się przy pomocy: </Label>
            <div className="button-container">

            <FacebookLogin
                appId="398395234073975"
                callback={responseFacebook}
                fields="name,email,picture"
                render={renderProps => (
                  <Button onClick={renderProps.onClick} className="btn-info btn-icon btn-round" color="facebook">
                  <i className="fab fa-facebook" />
                </Button>
                )}
              />

                    {/* <Button className="btn-success btn-icon btn-round" color="google">
                      <i className="fab fa-google" />
                    </Button> */}
                  </div>
                  <br/>
                  <Label>Nie masz konta? <Link to="/auth/register">Zarejestruj się!</Link></Label>
            
            </CardBody>
            
          </Card>
        </Col>
        </Row>
        </div>
    );
  }
}

export default Login;
