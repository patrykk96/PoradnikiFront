import React from "react";
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import * as guideActions from '../store/actions/guideActions';
import AddGuide from "../components/UserGuides/AddGuide";
import UserGuidesList from "../components/UserGuides/UserGuidesList";
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
      showAddGuide: false,
      id: localStorage.getItem("id"),
      isAuthenticated: false
    }

    componentDidMount = () => {
        this.props.getUser(this.state.id);
        this.props.getGuides(this.state.id, 0);

    }

    showAddGuide = () => {
      this.setState(prevState => ({
        showAddGuide: !prevState.showAddGuide
      }));
    }

    enableEditGame = (id) => {
      if (this.state.selectedId !== id) {
        this.setState({enabledEditGame: true});
      } else {
      this.setState(prevState => ({
        enabledEditGame: !prevState.enabledEditGame
    }));
      }
      this.setState({selectedId: id});
    }
  
    unableEditGuide = () => {
      this.setState({enabledEditGuide: false});
    }
  
    submitEditGuide = () => {
      const guide = {
        id: this.state.selectedId,
        name: this.state.name, 
        content: this.state.content
      }
  
      console.log(guide);
      this.props.editGuide(guide);
    }
  
    submitDeleteGuide = (id) => {
      console.log(id);
      this.props.deleteGuide(id);
    }
  

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
            {this.state.showAddGuide ? <AddGuide showAddGuide={this.showAddGuide} addGuide={this.props.addGuide}/> : <Card>
                <CardHeader>
                <CardTitle tag="h3">
                <i className="tim-icons icon-bulb-63 text-success" />{" "}
                  Twoje poradniki
                  {this.props.isAuthenticated ?
                  this.state.enabledEditGuide? <>
                    <Button className="float-right" color="link text-warning" onClick={this.unableEditGuide}><i className="tim-icons icon-simple-remove"></i></Button>
                    <Button className="float-right" color="success" onClick={this.submitEditGuide}>Edytuj</Button>
                    </> : 
                  <Button
                      onClick={this.showAddGuide}
                      color="success"
                     className="float-right btn-simple">Dodaj poradnik</Button> : null} 
                   
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width">
                    <Table className="tablesorter">
                      <tbody>
                       <UserGuidesList 
                          guides={this.props.guides}
                          unableEditGuide={this.unableEditGuide}
                          enableEditGame={this.enableEditGame}
                          submitEditGuide={this.submitEditGuide}
                       />
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                  </Card> }
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
      addGuide: (guide) => dispatch(guideActions.addGuide(guide)),
      editGuide: (guide) => dispatch(guideActions.editGuide(guide)),
      getGuides: (userId, gameId) => dispatch(guideActions.getGuides(userId, gameId))
    };
  };
  
  const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
      guides: state.guideReducer.guides,
      loading: state.gameReducer.loading,
      error: state.gameReducer.error
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGuides);


