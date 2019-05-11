import React from "react";
import * as actions from '../../store/actions/authActions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Stardew from "./../../assets/img/Stardew.jpg"

import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
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
            Stardew Valley
          </CardTitle>
          <CardImg src={Stardew}></CardImg>
        </CardHeader>
        <CardBody>
          <Label>Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
                  Stardew Valley to fajna gra i mamy do niej poradniki. 
          </Label>
        </CardBody>
      </Card>
    </Col>
    );
  }
}


export default Game;