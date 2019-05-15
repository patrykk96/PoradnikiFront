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


  render() {
    return (
      <>
        <div className="content">


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
                  </CardTitle>
                </CardHeader>
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
