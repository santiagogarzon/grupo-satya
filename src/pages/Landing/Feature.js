// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Import images
import speedo from "../../images/icon/speedometer.svg";
import code from "../../images/icon/device.svg";
import intellectual from "../../images/icon/insurance.svg";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0" id="quienes-somos">
          <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="main-title mb-4">Quienes somos?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>{" "}
                    es un equipo de profesionales especializados en la
                    realización de reclamos extra judiciales por siniestros ante
                    diferentes compañías de seguro, a fin de gestionarle a los
                    damnificados el cobro de dinero o reparación del vehículo
                    siniestrado de manera rápida, efectiva y simple.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="col-12 mt-60">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img src={speedo} alt="" />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">Velocidad</h4>
                    <p className="text-muted mb-0">
                      Valoramos tu tiempo. Solicitamos sólo los requisitos
                      necesarios y te atendemos 100% online.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} className="col-12 mt-5 mt-sm-0">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img src={intellectual} alt="" />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">Expertos</h4>
                    <p className="text-muted mb-0">
                      Trabajamos con profesionales médicos, psicólogos y peritos
                      mecánicos necesarios para la determinación de la
                      incapacidad y de la mecánica del hecho.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} className="col-12 mt-5 mt-sm-0">
                <div className="features text-center">
                  <div className="image position-relative d-inline-block">
                    <img src={code} alt="" />
                  </div>

                  <div className="content mt-4">
                    <h4 className="title-2">100% Virtual</h4>
                    <p className="text-muted mb-0">
                      Solicitalo 100% por internet desde donde estés.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
