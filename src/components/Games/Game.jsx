import React from "react";
import Stardew from "./../../assets/img/Stardew.jpg"

import {
    Card,
    Col,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    CardImg
  } from "reactstrap";
  

class Game extends React.Component {
  render() {
    return (
      <Col lg="4">
      <Card>
        <CardHeader>
          <h5 className="card-category">Przeglądaj gry</h5>
          <CardTitle tag="h3">
            <i className="tim-icons icon-controller text-info" />{" "}
            {this.props.gameName}
          </CardTitle>
          <CardImg src={this.props.gameImage}></CardImg>
        </CardHeader>
        <CardBody>
          <Label>
            {this.props.gameDescription}
          </Label>
        </CardBody>
      </Card>
    </Col>
    );
  }
}


export default Game;