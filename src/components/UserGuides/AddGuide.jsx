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
  Input,
} from "reactstrap";

import Select from 'react-select';

class AddGuide extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
       guideName: null,
       guideContent: null,
       dropdownOpen: false,
       selectedOption: null
    };
  }

  componentDidMount() {
    this.props.getGames();
    
  };

  handleGameChange = selectedOption => {
    this.setState({selectedOption: selectedOption});
    console.log(selectedOption)
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  fileSelected = (event) => {
      console.log(event.target.files[0]);
      this.setState({fileSelected: event.target.files[0]})
  }

  submitAddGuide = (event) => {
    event.preventDefault();
    if (this.state.selectedOption)
    {
      const guide = {
        author: localStorage.getItem("id"),
        name: this.state.guideName,
        content: this.state.guideContent,
        game: this.state.selectedOption.value
      };

      this.props.addGuide(guide);
      this.setState({selectedOption: null})
    }

    };
  
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
  });
  };

  render() {
    let games = this.props.games.map(game => {
      return {value: game.id, label: game.name}
    })
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
                          <label>Treść poradnika</label>
                          <Input
                            cols="80"
                            defaultValue=""
                            placeholder="Treść poradnika"
                            rows="4"
                            type="textarea"
                            name="guideContent"
                            maxLength="255"
                            required
                            onChange={event => this.handleInputChange(event)}
                          />
                        </FormGroup>
                      
                      <Select
                        placeholder="Wybierz grę"
                        value={this.state.selectedOption}
                        onChange={this.handleGameChange}
                        options={games}
                        isMulti={false}
                        isSerchable={true} />
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
