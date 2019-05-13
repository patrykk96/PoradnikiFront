import React from "react";
import Rating from 'react-rating';

import {
  Button
} from "reactstrap";

const GameInList = (props) => {
    return (
        <tr id={props.key}>
        <td width="5%"><img src={props.gameImage} width="70px" alt="Game"></img></td>
            <td width="15%" className="tablesorter">
            {" "} {props.gameName}</td>
            <td width="25%"><small>{props.gameDescription}</small></td>
            <td width="20%" className="text-center">
                  <Rating 
                  placeholderRating="2.7"
                  emptySymbol="tim-icons icon-shape-star rating" 
                  fullSymbol="tim-icons icon-shape-star text-success rating" 
                  placeholderSymbol="tim-icons icon-shape-star text-success rating"
                  readonly/>
            </td>
            <td width="15%" className="text-center">23</td>
            <td width="5%" className="text-right"><Button color="link"><i className="tim-icons icon-pencil"/></Button></td>

        </tr>
    );
  }

export default GameInList;