import React from "react";

import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
state = {
  username: "",
  description: ""
}
  componentWillMount = () => {
    this.props.getUser(localStorage.getItem("id"));
}

componentDidUpdate(prevProps, prevState, snapshot) {
  if (prevProps.specificProperty !== this.props.specificProperty) {
      this.setState({username: this.props.user.username});
      this.setState({description: this.props.user.description})
  }
}

editProfile = () => {
  const user = {
    id: localStorage.getItem("id"),
    username: this.state.username,
    description: this.state.description
  }

  this.props.editUser(user);
}

handleInputChange = event => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value
});
};

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edytuj profil</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Nazwa użytkownika</label>
                          <Input
                            defaultValue={this.props.user.username}
                            placeholder="Nazwa użytkownika"
                            type="text"
                            name="username"
                            onChange={event => this.handleInputChange(event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Opis</label>
                          <Input
                            cols="80"
                            defaultValue={this.props.user.description}
                            placeholder="Opis"
                            rows="4"
                            type="textarea"
                            name="description"
                            onChange={event => this.handleInputChange(event)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit" onClick={this.editProfile}>
                    Edytuj profil
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      /><br/>
                      <h5 className="title">{this.props.user.username}</h5>
                    </a>
                    <h7 className="title">{this.props.user.email}</h7>
                  </div>
                  <div className="card-description">
                    {!this.props.user.description ? <>Miejsce na Twój opis...</> : this.props.user.description}
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
    getUser: (userId) => dispatch(userActions.getUser(userId)),
    editUser: (user) => dispatch(userActions.editUser(user))
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
)(UserProfile);