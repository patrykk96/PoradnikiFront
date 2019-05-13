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
  render() {
    let games = null;

    if (this.props.games) {
      games = this.props.games.map(game => {
        return (
          <GameInList 
              key={game.id} 
              gameName={game.name} 
              gameDescription={game.description} 
              gameImage={game.image} />
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
              <Button
                      onClick={this.props.showAddGame}
                      className="float-right"
                      color="primary">
                     Dodaj grę do bazy gier</Button>
                     
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
