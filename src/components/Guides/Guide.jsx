import React from "react";
import Rating from 'react-rating';

import {
  Button,
  Input,
  FormGroup,
  Label
} from "reactstrap";

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null
    }
}

setRating = (value)=>{
  const review = {
    rating: value,
    userId: localStorage.getItem("id"),
    entityId: this.props.id
  }

  this.props.addGuideReview(review);
  this.setState({rating: value});
}
  render() 
  {
    let rating = null;
    if(this.props.isAuthenticated) {
      rating = <Rating 
                    placeholderRating={this.props.userRating}
                    emptySymbol="tim-icons icon-shape-star rating" 
                    fullSymbol="tim-icons icon-shape-star text-success rating" 
                    placeholderSymbol="tim-icons icon-shape-star text-success rating"
                    readonly={false}
                    onClick={this.setRating}/>;
  
      if (this.state.rating) {
        rating = <Rating 
        placeholderRating={this.state.rating}
        emptySymbol="tim-icons icon-shape-star rating" 
        fullSymbol="tim-icons icon-shape-star text-success rating" 
        placeholderSymbol="tim-icons icon-shape-star text-success rating"
        readonly={false}
        onClick={this.setRating}/>
  
      }
    }
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
              <small className="float-right">Utworzono: {this.props.username}, {this.props.guideDate}</small>
          </p>
          <p className="title">{this.props.guideName}
              </p>
              <div>
              <Label>
                Ocena użytkowników:  
                <br></br>
                <Rating 
                      placeholderRating={this.props.guideRating}
                      emptySymbol="tim-icons icon-shape-star rating" 
                      fullSymbol="tim-icons icon-shape-star text-success rating" 
                      placeholderSymbol="tim-icons icon-shape-star text-success rating"
                      readonly/>
              </Label>
              <small>Liczba głosów: {this.props.reviewCount}</small>
                <br></br>
                {this.props.isAuthenticated ? <Label>
                  Twoja ocena:  
                  <br></br>
                  {rating}
                </Label>: null}
                  
                </div>
            <p className="text">
            {this.props.guideContent}
            </p>
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