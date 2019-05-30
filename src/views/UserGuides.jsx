import React from "react";
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions';
import * as guideActions from '../store/actions/guideActions';
import * as gameActions from '../store/actions/gameActions';
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
      isAuthenticated: false,
      enabledEditGuide: false,
      selectedId: null,
      name: null,
      content: null
    }


    handleInputChange = event => {
      event.preventDefault();
      if(this.props.id === this.props.selectedId) {
      this.setState({
        [event.target.name]: event.target.value
    });
    }};

    componentDidMount = () => {
        this.props.getUser(this.state.id);
        this.props.getGuides(this.state.id, 0);

    }

    showAddGuide = () => {
      this.setState(prevState => ({
        showAddGuide: !prevState.showAddGuide
      }));
    }

    enableEditGuide = (id) => {
      if (this.state.selectedId !== id) {
        this.setState({enabledEditGuide: true});
      } else {
      this.setState(prevState => ({
        enabledEditGuide: !prevState.enabledEditGuide
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
        content: this.state.content,
        author: localStorage.getItem("id")
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
            {this.state.showAddGuide ? <AddGuide showAddGuide={this.showAddGuide} addGuide={this.props.addGuide} getGames={this.props.getGames} games={this.props.games}/> : <Card className="card-tasks">
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
                  <div className="table-responsive">
                    <Table className="tablesorter">
                      <tbody>
                       <UserGuidesList 
                          guides={this.props.guides}
                          unableEditGuide={this.unableEditGuide}
                          enableEditGuide={this.enableEditGuide}
                          enabledEditGuide={this.state.enabledEditGuide}
                          submitEditGuide={this.submitEditGuide}
                          submitDeleteGuide={this.submitDeleteGuide}
                          handleInputChange={this.handleInputChange}
                          addGuideReview={this.props.addGuideReview}
                          selectedId={this.state.selectedId}
                          isAuthenticated={this.props.isAuthenticated}
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
      getGuides: (userId, gameId) => dispatch(guideActions.getGuides(userId, gameId)),
      getGames: () => dispatch(gameActions.getGames()),
      deleteGuide: (guideId) => dispatch(guideActions.deleteGuide(guideId)),
      addGuideReview: (review) => dispatch(guideActions.addGuideReview(review))
    };
  };
  
  const mapStateToProps = state => {
    return {
      user: state.userReducer.user,
      guides: state.guideReducer.guides,
      games: state.gameReducer.games,
      loading: state.guideReducer.loading,
      error: state.guideReducer.error
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGuides);


