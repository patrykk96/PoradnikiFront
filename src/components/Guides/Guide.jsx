import React from "react";

import {
  Button,
  Input,
  FormGroup
} from "reactstrap";

class Guide extends React.Component {
  render() 
  {
    return (
        <tr>
          {this.props.id === this.props.selectedId && this.props.enabledEditGuide ? 
        <>
        <td width="15%"><img src={this.props.gameImage} width="70px" alt="Game"></img>
       <br/><br/>
        </td>
            <td width="15%" className="tablesorter">
            {" "}<FormGroup>
                          <label>Edytuj tytuł poradnika</label>
                          <Input
                            defaultValue={this.props.guideName}
                            placeholder="Tytuł poradnika"
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
                            defaultValue={this.props.guideContent}
                            placeholder="Treść poradnika"
                            name="content"
                            onChange={event => this.props.handleInputChange(event)}
                            rows="8"
                            type="textarea"
                          />
                        </FormGroup></td> </>
          :
          <>
          <td md="4"> 

            <img src={this.props.gameImage} width="150px" alt="Guide"></img>
          </td>
          <td md="8">
            
          <p>
              <small>{this.props.gameName}</small>
              <small className="float-right">Utworzono: {this.props.username}, 02.03.2019</small>
          </p>
          <p className="title">{this.props.guideName}
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
            {this.props.guideContent}
            </p>
            <small>Komentarze: 8</small> 
          </td>
          {this.props.showEditOptions ? 
          <>
          <td width="5%" className="text-right"><Button onClick={() => this.props.enableEditGuide(this.props.id)} color="link"><i className="tim-icons icon-pencil"/></Button></td>
          <td width="5%" className="text-right"><Button onClick={() => this.props.submitDeleteGuide(this.props.id)} color="link"><i className="tim-icons icon-trash-simple"/></Button></td>
            </> : null
          }
          
          </>}
      </tr>
    );
  }
}


export default Guide;