// React Basic and Bootstrap
import React, { Component } from "react";
import { Col } from "reactstrap";

// Import Images
import client1 from "../../images/logos_aseguradoras/logo_01.png";
import client2 from "../../images/logos_aseguradoras/logo_02.png";
import client3 from "../../images/logos_aseguradoras/logo_03.png";
import client4 from "../../images/logos_aseguradoras/logo_04.png";
import client5 from "../../images/logos_aseguradoras/logo_05.png";
import client6 from "../../images/logos_aseguradoras/logo_06.png";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Col lg={2} md={2} className="col-6 text-center">
          <img src={client1} height="75" width="100" alt="" />
        </Col>

        <Col lg={2} md={2} className="col-6 text-center">
          <img src={client2} height="75" width="100" alt="" />
        </Col>

        <Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
          <img src={client3} height="75" width="100" alt="" />
        </Col>

        <Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
          <img src={client4} height="75" width="100" alt="" />
        </Col>

        <Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
          <img src={client5} height="75" width="100" alt="" />
        </Col>

        <Col lg={2} md={2} className="col-6 text-center mt-4 mt-sm-0">
          <img src={client6} height="75" width="100" alt="" />
        </Col>
      </React.Fragment>
    );
  }
}

export default Partner;
