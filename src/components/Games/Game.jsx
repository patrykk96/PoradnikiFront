import React from "react";
import Rating from "react-rating";

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

    this.props.addGameReview(review);
    this.setState({rating: value});
  }

  render() {
    console.log("Spr" + this.props.isAuthenticated)
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
      <Col lg="4">
      <Card>
        <CardHeader>
          <h5 className="card-category">Przeglądaj gry</h5>
          <CardTitle tag="h3">
            <i className="tim-icons icon-controller text-info" />{" "}
            {this.props.gameName}
          </CardTitle>
        <a href="#">
          <CardImg src={this.props.gameImage} onClick={() => this.props.showGameGuides(this.props.id)}></CardImg>
        </a>  
        </CardHeader>
        <CardBody>
          <Label>
            {this.props.gameDescription}
          </Label>
          <br></br>
          <Label>
            Ocena użytkowników:  
            <br></br>
            <Rating 
                  placeholderRating={this.props.gameRating}
                  emptySymbol="tim-icons icon-shape-star rating" 
                  fullSymbol="tim-icons icon-shape-star text-success rating" 
                  placeholderSymbol="tim-icons icon-shape-star text-success rating"
                  readonly/>
          </Label>
          <br></br>
          {this.props.isAuthenticated ? <Label>
            Twoja ocena:  
            <br></br>
            {rating}
          </Label>: null}
          
        </CardBody>
      </Card>
    </Col>
    );
  }
}


export default Game;