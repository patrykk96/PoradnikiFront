import React from "react";
import Rating from 'react-rating';

import {
  Button,
  Input,
  FormGroup
} from "reactstrap";

  class GameInList extends React.Component {
    render() {
    return (
      <tr>
        {this.props.id === this.props.selectedId && this.props.enabledEditGame ? 
        <>
        <td width="15%"><img src={this.props.gameImage} width="70px" alt="Game"></img>
       <br/><br/>
        <label>Edytuj obraz gry</label>
        <Input type="file" name="file" onChange={this.props.fileSelected} />
        </td>
            <td width="15%" className="tablesorter">
            {" "}<FormGroup>
                          <label>Edytuj tytuł gry</label>
                          <Input
                            defaultValue={this.props.gameName}
                            placeholder="Tytuł gry"
                            type="text"
                            name="name"
                            onChange={event => this.props.handleInputChange(event)}
                          />
                        </FormGroup>
                       </td>
            <td width="25%"><FormGroup>
                          <label>Edytuj opis</label>
                          <Input
                            cols="100"
                            defaultValue={this.props.gameDescription}
                            placeholder="Opis gry"
                            name="description"
                            onChange={event => this.props.handleInputChange(event)}
                            rows="8"
                            type="textarea"
                          />
                        </FormGroup></td> </>

        : 
        <>
        <td width="5%"><img src={this.props.gameImage} width="70px" alt="Game"></img></td>
            <td width="15%" className="tablesorter">
            {" "} {this.props.gameName}</td>
            <td width="25%"><small>{this.props.gameDescription}</small></td></>}
            <td width="20%" className="text-center">
                  <Rating 
                  placeholderRating={this.props.gameRating}
                  emptySymbol="tim-icons icon-shape-star rating" 
                  fullSymbol="tim-icons icon-shape-star text-success rating" 
                  placeholderSymbol="tim-icons icon-shape-star text-success rating"
                  readonly/>
            </td>
            <td width="15%" className="text-center">{this.props.guidesCount}</td>
            <td width="5%" className="text-right"><Button onClick={() => this.props.enableEditGame(this.props.id)} color="link"><i className="tim-icons icon-pencil"/></Button></td>
            <td width="5%" className="text-right"><Button onClick={() => this.props.submitDeleteGame(this.props.id)} color="link"><i className="tim-icons icon-trash-simple"/></Button></td>
        </tr>
    );
  }
}

export default GameInList;