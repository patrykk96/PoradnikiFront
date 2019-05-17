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

  componentDidMount = () => {
    this.props.getUser(localStorage.getItem("id"));
}

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
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>E-mail</label>
                          <Input
                            defaultValue={this.props.user.email}
                            placeholder="E-mail"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Nazwa użytkownika</label>
                          <Input
                            defaultValue={this.props.user.username}
                            placeholder="Nazwa użytkownika"
                            type="text"
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
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
)(UserProfile);