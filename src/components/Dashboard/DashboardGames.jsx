import React from "react";
import Game from "../Games/Game";

class DashboardGames extends React.Component {
  render() {

    let games = null;

    if (this.props.games) {
      games = this.props.games.map(game => {
        return (
          <Game
              key={game.id}
              id={game.id} 
              gameName={game.name} 
              gameDescription={game.description} 
              gameImage={game.image}
              gameRating={game.rating}
              userRating={game.userRating}
              guidesCount={game.guidesCount}
              addGameReview={this.props.addGameReview}
              showGameGuides={this.props.showGameGuides}
              isAuthenticated={this.props.isAuthenticated}
             // enableEditGame={this.enableEditGame}
             // enabledEditGame={this.state.enabledEditGame}
             //submitDeleteGame={this.submitDeleteGame}
             // selectedId={this.state.selectedId}
              handleInputChange={this.handleInputChange}
              fileSelected={this.fileSelected} />
        );
      }
      );
    }
    return (
      <>
       {games}
      </>
    );
  }
}

export default DashboardGames;
