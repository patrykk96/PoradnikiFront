import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";

import GameInList from "./GameInList";

class GamesBase extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      enabledEditGame: false,
      selectedId: null,
      fileSelected: null,
      name: null,
      description: null,
      }
  }

  handleInputChange = event => {
    event.preventDefault();
    if(this.props.id === this.props.selectedId) {
    this.setState({
      [event.target.name]: event.target.value
  });
  }};

  
  fileSelected = (event) => {
    console.log(event.target.files[0]);
    this.setState({fileSelected: event.target.files[0]})
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

  unableEditGame = () => {
    this.setState({enabledEditGame: false});
  }

  submitEditGame = () => {
    const game = {
      id: this.state.selectedId,
      name: this.state.name, 
      description: this.state.description,
      image: this.state.fileSelected
    }

    console.log(game);
    this.props.editGame(game);
  }

  render() {
    let games = null;

    if (this.props.games) {
      games = this.props.games.map(game => {
        return (
          <GameInList
              key={game.id}
              id={game.id} 
              gameName={game.name} 
              gameDescription={game.description} 
              gameImage={game.image}
              enableEditGame={this.enableEditGame}
              enabledEditGame={this.state.enabledEditGame}
              selectedId={this.state.selectedId}
              handleInputChange={this.handleInputChange}
              fileSelected={this.fileSelected} />
        );
      }
      );
    }

    return (
      <>
         <Card className="card-tasks">
              <CardHeader>
                  <CardTitle tag="h3">
                <i className="tim-icons icon-controller text-info" />{" "}
                      Baza gier

               {this.state.enabledEditGame? <>
                <Button className="float-right" color="link text-warning" onClick={this.unableEditGame}><i className="tim-icons icon-simple-remove"></i></Button>
                <Button className="float-right" color="success" onClick={this.submitEditGame}>Edytuj</Button>
                </>
         :      
        <Button
                onClick={this.props.showAddGame}
                className="float-right"
                color="primary">
               Dodaj grę do bazy gier</Button>}  
                     
                  </CardTitle>
              </CardHeader>
              <CardBody>
              <Table>
                    <thead className="text-primary">
                      <tr>
                        <th>Obraz</th>
                        <th>Tytuł</th>
                        <th>Opis</th>
                        <th className="text-center">Ocena</th>
                        <th className="text-center">Ilość poradników</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {games}
                    </tbody>
                  </Table>
              </CardBody>
          </Card>
      </>
    );
  }
}

export default GamesBase;
