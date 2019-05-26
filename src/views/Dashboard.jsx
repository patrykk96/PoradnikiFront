import React from "react";
import { connect } from 'react-redux';
import Game from '../components/Games/Game';
import * as gameActions from '../store/actions/gameActions';
import * as guideActions from '../store/actions/guideActions';
import DashboardGames from '../components/Dashboard/DashboardGames';
import DashboardGuides from '../components/Dashboard/DashboardGuides';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGames: false,
      showAddGuide: false,
      showGameGuides: false
    };
  }

  componentDidMount() {
    this.props.getGames();
    this.props.getGuides(0, 0);
  };

  showGames = () => {
    this.setState(prevState => ({
      showGames: !prevState.showGames
    }));
  }

  showGameGuides = (gameId) => {
    this.setState(prevState => ({
      showGameGuides: !prevState.showGameGuides
    }));
    console.log(gameId);
    this.props.getGuides(0, gameId);
  }

  render() {
    console.log(this.props.isAuthenticated)
    return (
      <>
        <div className="content">

          <Row>
            <DashboardGames
              games={this.props.games}
              addGameReview={this.props.addGameReview}
              getGameReview={this.props.getGameReview}
              review={this.props.review}
              showGameGuides={this.showGameGuides}
              isAuthenticated={this.props.isAuthenticated}
            />
          </Row>

            {this.state.showGames ? <Row>
              <Game/>
              <Game/>
              <Game/>
            </Row> : <React.Fragment/>}

            <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
            
            <a href="#">
            <Card>
              <CardHeader>
              <CardTitle tag="h5" onClick={this.showGames}>
              <span
                      className="tim-icons icon-minimal-down text-info"
                      data-notify="icon"
                    /> Pokaż więcej gier
                  </CardTitle>
                    </CardHeader>
                    </Card> </a>
            </Col>
          </Row>
          <Row>

          <Col lg="12" md="12">
          <Card>
                <CardHeader>
                <CardTitle tag="h3">
                <i className="tim-icons icon-bulb-63 text-success" />{" "}
                  Poradniki
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table className="tablesorter" responsive>
                      <tbody>
                       <DashboardGuides
                        guides={this.props.guides}
                        isAuthenticated={this.props.isAuthenticated}
                       />
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
    getGames: (userId) => dispatch(gameActions.getGames(userId)),
    getGuides: (userId, gameId) => dispatch(guideActions.getGuides(userId, gameId)),
    addGameReview: (review) => dispatch(gameActions.addGameReview(review))
  };
};

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games,
    guides: state.guideReducer.guides,
    loading: state.gameReducer.loading,
    error: state.gameReducer.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);