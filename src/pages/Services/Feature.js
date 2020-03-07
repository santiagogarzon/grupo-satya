// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Import images
import speedo from "../../images/icon/speedometer.svg";
import code from "../../images/icon/device.svg";
import intellectual from "../../images/icon/insurance.svg";

import CountUp from "react-countup";

import Asset190 from "../../images/illustrator/Asset190.svg";
import Asset189 from "../../images/illustrator/Asset189.svg";
import Asset186 from "../../images/illustrator/Asset186.svg";
import Asset187 from "../../images/illustrator/Asset187.svg";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0">
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
                    realización de reclamos administrativos ante diferentes
                    compañías de seguro, a fin de gestionarle a los damnificados
                    el cobro de dinero o reparación del vehículo siniestrado de
                    manera rápida, efectiva y simple.
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

          <div className="container mt-100 mt-60">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="main-title mb-4">
                    Las estadisticas de{" "}
                    <span className="text-primary">Grupo Satya</span>
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Comenza tu reclamo con{" "}
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>
                    {""}, la manera más simple y rápida de resolver tu siniestro
                  </p>
                </div>
              </Col>
            </Row>
            <Row id="counter">
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset190} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="45000">
                      {" "}
                      <CountUp start={0} end={628} duration={8} />
                    </span>
                    $
                  </h2>
                  <h5 className="counter-head text-muted">Siniestros</h5>
                </div>
              </Col>
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset186} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="48002">
                      {" "}
                      <CountUp start={0} end={500655} duration={8} />
                    </span>
                    $
                  </h2>
                  <h5 className="counter-head text-muted">Monto reclamado</h5>
                </div>
              </Col>
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset189} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="11">
                      <CountUp start={0} end={85} duration={8} />
                    </span>
                    %
                  </h2>
                  <h5 className="counter-head text-muted">Casos Ganados</h5>
                </div>
              </Col>
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset187} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="9">
                      {" "}
                      <CountUp start={0} end={90} duration={8} />
                    </span>
                    Días
                  </h2>
                  <h5 className="counter-head text-muted">Tiempo de Pago</h5>
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
