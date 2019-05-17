import React from "react";
import { connect } from "react-redux";

import GamesBase from '../components/AdminPanel/GamesBase.jsx';
import AddGame from '../components/AdminPanel/AddGame.jsx';
import Spinner from '../components/Spinner.jsx';
import * as gameActions from '../store/actions/gameActions';


import {
  Row,
  Col
} from "reactstrap";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddGame: false,
    };
  }

  componentDidMount() {
    this.props.getGames();
  };
 
  showAddGame = () => {
    this.setState(prevState => ({
        showAddGame: !prevState.showAddGame
    }));
  }

  

  render() {
    return (
      <>
        <div className="content">
          <Row>
              {this.props.loading ? <Spinner/> : 
          <Col className="ml-auto mr-auto" lg="12" md="12">
              {this.state.showAddGame 
              ? 
              <AddGame 
                  addGame={this.props.addGame} 
                  showAddGame={this.showAddGame}/> 
              : 
              <GamesBase 
                  showAddGame={this.showAddGame}
                  editGame={this.props.editGame} 
                  games={this.props.games}
                  deleteGame={this.props.deleteGame}/>}
              </Col> }
          </Row>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      addGame: (game) => dispatch(gameActions.addGame(game)),
      getGames: () => dispatch(gameActions.getGames()),
      editGame: (game) => dispatch(gameActions.editGame(game)),
      deleteGame: (id) => dispatch(gameActions.deleteGame(id))
    };
  };
  
  const mapStateToProps = state => {
    return {
      games: state.gameReducer.games,
      loading: state.gameReducer.loading,
      error: state.gameReducer.error
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminPanel);

