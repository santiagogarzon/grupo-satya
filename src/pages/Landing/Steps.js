// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//import images

import CountUp from "react-countup";

import Asset190 from "../../images/illustrator/Asset190.svg";
import Asset189 from "../../images/illustrator/Asset189.svg";
import Asset186 from "../../images/illustrator/Asset186.svg";
import Asset187 from "../../images/illustrator/Asset187.svg";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="proceso">
          <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-60">
                  <h4 className="main-title mb-4">
                    Pasos para iniciar tu reclamo
                  </h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Trabajemos juntos para resolver tu siniestro,{" "}
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>{" "}
                    desarrolló este proceso simple que te conseguira tu
                    resarcimiento de manera facil, rapida y mas importante
                    GRATIS.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
              <Col lg={12} md={12}>
                <Row>
                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-1-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Documentación</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-2-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Validación de Documentación</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-3-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Generación de Reclamo</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-4-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Firma del Reclamo</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-5-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Resolución de Reclamo</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="col-12">
                    <div className="features p-1 pt-4 pb-4">
                      <i className="mdi mdi-numeric-6-box icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                      <div className="content d-block overflow-hidden">
                        <h4 className="title">Plazo de Cobro</h4>
                        <p className="text-muted para mb-0">
                          composed in a pseudo-Latin language which more or less
                          pseudo-Latin language corresponds.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* <Col lg={4} md={4} className="col-12 pt-2 pt-sm-0">
                <img
                  src={featureImg}
                  className="img-fluid mx-auto d-block"
                  alt=""
                />
              </Col> */}
            </Row>

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
                      {""}, la manera más simple y rápida de resolver tu
                      siniestro
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row id="counter">
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset190} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="45000">
                      {" "}
                      <CountUp start={200} end={628} duration={20} />
                    </span>
                  </h2>
                  <h5 className="counter-head text-muted">Siniestros</h5>
                </div>
              </Col>
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset186} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    $
                    <span className="counter-value" data-count="48002">
                      {" "}
                      <CountUp start={150000} end={3245012} duration={20} />
                    </span>
                  </h2>
                  <h5 className="counter-head text-muted">Monto reclamado</h5>
                </div>
              </Col>
              <Col md={3} className="col-6 mt-4 pt-2">
                <div className="counter-box text-center">
                  <img src={Asset189} height="70" alt="" />
                  <h2 className="mb-0 mt-3">
                    <span className="counter-value" data-count="11">
                      <CountUp start={50} end={87} duration={20} />
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
                      <CountUp start={30} end={70} duration={20} />
                    </span>{" "}
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

export default Steps;
