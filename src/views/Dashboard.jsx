import React from "react";
import Game from '../components/Games/Game';
import Guide from '../components/Guides/Guide';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGames: false,
      showAddGuide: false
    };
  }

  showGames = () => {
    this.setState(prevState => ({
      showGames: !prevState.showGames
    }));
  }

  showAddGuide = () => {
    this.setState(prevState => ({
      showAddGuide: !prevState.showAddGuide
    }));
  }

  render() {
    return (
      <>
        <div className="content">

          {/* <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Przeglądaj gry</h5>
                      <CardTitle tag="h2">Gry</CardTitle>
                    </Col>


                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Accounts
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2"
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Purchases
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Sessions
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                    
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row> */}

          <Row>
            <Game/>
            <Game/>
            <Game/>
          </Row>

            {this.state.showGames ? <Row>
              <Game/>
              <Game/>
              <Game/>
            </Row> : <React.Fragment/>}

            <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
            
            {/* <Button
                              block
                              color="warning"
                              onClick={this.showGames}
                            >
                              <i
                      className="tim-icons icon-minimal-down "
                      data-notify="icon"
                    /> {" "} Pokaż więcej gier
                            </Button> */}
                            <a href="#">
            <Card>
              <CardHeader>
              <CardTitle tag="h5" onClick={this.showGames}>
              <span
                      className="tim-icons icon-minimal-down text-info"
                      data-notify="icon"
                    /> Pokaż więcej gier
                  </CardTitle>
                    </CardHeader>
                    </Card> </a>
            </Col>
          </Row>
          <Row>

          <Col lg="12" md="12">
          <Card>
                <CardHeader>
                <CardTitle tag="h3">
                <i className="tim-icons icon-bulb-63 text-success" />{" "}
                  Poradniki
                   {this.props.isAuthenticated ? <Button
                      onClick={this.showAddGuide}
                      color="success"
                     className="float-right btn-simple">Dodaj poradnik</Button> : null} 
                  </CardTitle>
                </CardHeader>
                {this.state.showAddGuide ? <Col lg="12" md="12">
                <Card><CardHeader><CardTitle tag="h3">Dodaj poradnik</CardTitle></CardHeader><CardBody>Hello</CardBody>
                
                </Card></Col> : <></>}
                
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table className="tablesorter" responsive>
                      <tbody>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                       <Guide/>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
