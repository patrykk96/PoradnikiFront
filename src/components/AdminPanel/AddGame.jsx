import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";

class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        game: {
            gameName: "",
            gameDescription: "",
            fileSelected: null,
        },
    };
  }

  fileSelected = (event) => {
      console.log(event.target.files[0]);
      this.setState({fileSelected: event.target.files[0]})
  }

  submitAddGame = (event) => {

    const formDataFile = new FormData();
    formDataFile.append( "image", this.state.fileSelected);

    const game = {
        name: this.state.gameName,
        description: this.state.gameDescription,
        image: formDataFile
        //image: this.state.fileSelected
      };
      
      event.preventDefault();
      this.props.addGame(game);
    };
  
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
  });
  };

  render() {
    return (
      <>
          
          <Row>
          <Col className="ml-auto mr-auto text-left" md="8">
          <Card>
                <CardHeader>
                <CardTitle tag="h3">
                <i className="tim-icons icon-controller text-success" />{" "}
                  Dodaj grę do bazy gier
                  <Button
                      onClick={this.props.showAddGame}
                      className="float-right"
                      color="warning">
                     Wróć do bazy gier</Button>
                     
                  </CardTitle>
                </CardHeader>
               
                
                <CardBody>
                    <form onSubmit={this.submitAddGame}>


                    <FormGroup>
                          <label>Tytuł gry</label>
                          <Input
                            defaultValue=""
                            placeholder="Tytuł gry"
                            name="gameName"
                            type="text"
                            maxLength="100"
                            required
                            onChange={event => this.handleInputChange(event)}
                          />
                          
                        </FormGroup>

                        <FormGroup>
                          <label>Opis gry</label>
                          <Input
                            cols="80"
                            defaultValue=""
                            placeholder="Opis gry"
                            rows="4"
                            type="textarea"
                            name="gameDescription"
                            maxLength="255"
                            required
                            onChange={event => this.handleInputChange(event)}
                          />
                        </FormGroup>

                    <label>Obraz gry</label>
                    <Input type="file" name="file" onChange={this.fileSelected} />
                        <br/><br/>
                    <Button
                      onClick={this.submitAddGame}
                      color="primary">
                     Dodaj grę</Button>
                        </form>
                </CardBody>
              </Card>
              </Col>
          </Row>
      </>
    );
  }
}

export default AddGame;
