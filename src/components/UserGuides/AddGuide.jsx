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

class AddGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        guide: {
            guideName: "",
            guideDescription: "",
            fileSelected: null,
        },
    };
  }

  fileSelected = (event) => {
      console.log(event.target.files[0]);
      this.setState({fileSelected: event.target.files[0]})
  }

  submitAddGuide = (event) => {

    const guide = {
        author: localStorage.getItem("id"),
        name: this.state.guideName,
        description: this.state.guideDescription,
        game: 2
      };
      
      event.preventDefault();
      this.props.addGuide(guide);
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
                  Dodaj poradnik do gry
                
                  <Button className="float-right" color="link text-warning" onClick={this.props.showAddGuide}><i className="tim-icons icon-simple-remove"></i></Button>
                     
                     
                  </CardTitle>
                </CardHeader>
               
                
                <CardBody>
                    <form onSubmit={this.submitAddGuide}>


                    <FormGroup>
                          <label>Tytuł poradnika</label>
                          <Input
                            defaultValue=""
                            placeholder="Tytuł poradnika"
                            name="guideName"
                            type="text"
                            maxLength="100"
                            required
                            onChange={event => this.handleInputChange(event)}
                          />
                          
                        </FormGroup>

                        <FormGroup>
                          <label>Opis poradnika</label>
                          <Input
                            cols="80"
                            defaultValue=""
                            placeholder="Opis poradnika"
                            rows="4"
                            type="textarea"
                            name="guideDescription"
                            maxLength="255"
                            required
                            onChange={event => this.handleInputChange(event)}
                          />
                        </FormGroup>

                    <label>Obraz poradnika</label>
                    <Input type="file" name="file" onChange={this.fileSelected} />
                        <br/><br/>
                    <Button
                      onClick={this.submitAddGame}
                      color="primary">
                     Dodaj poradnik</Button>
                        </form>
                </CardBody>
              </Card>
              </Col>
          </Row>
      </>
    );
  }
}

export default AddGuide;
