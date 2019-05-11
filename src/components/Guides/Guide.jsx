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
  

class Guide extends React.Component {
  render() {
    return (
        <tr>
        <td md="4">
          <img src={Stardew}></img>
        </td>
        <td md="8">
          
        <p>
            <small>Stardew Valley</small>
            <small className="float-right">Utworzono: Ania, 02.03.2019</small>
        </p>
        <p className="title">Poradnik jak zbierać pieniądze szybko
          <small className="float-right">Wyświetlenia: 168</small>
            </p>
            <div>
                <p className="tim-icons icon-shape-star text-success"></p>{" "}
                <p className="tim-icons icon-shape-star text-success"></p>{" "}
                <p className="tim-icons icon-shape-star text-danger"></p>{" "}
                <p className="tim-icons icon-shape-star text-danger"></p>{" "}
                <p className="tim-icons icon-shape-star text-danger"></p>{" "}
                <small>Liczba głosów: 10</small>
              </div>
          <p className="text-muted">
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim.
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          Poradnik jak zbierać szybko pieniądze. Weź przyjaciela i zdubluj rzeczy z nim. 
          </p>
          <small>Komentarze: 8</small> 
        </td>
      </tr>
    );
  }
}


export default Guide;