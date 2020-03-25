// React Basic and Bootstrap
import React, { Component } from "react";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

//import images
import roundWhite from "../../images/shapes/round-white.png";

class ShowCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-0 bg-light">
          <div className="container mt-100 mt-60">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-60">
                  <h4 className="main-title mb-4 mt-4">
                    Nuestras
                    <span className="text-primary"> Areas</span>
                  </h4>

                  <Row className="mt-4 justify-content-center">
                    <Col
                      lg={8}
                      md={12}
                      className="text-center"
                      style={{ marginTop: "32px" }}
                    >
                      <Nav
                        pills
                        id="navnav"
                        className="nav-justified flex-column space-between flex-sm-row"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1"
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1 rounded"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Area Legal
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2"
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Area Reparaciones Vehiculares
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "3"
                            })}
                            onClick={() => {
                              this.toggle("3");
                            }}
                          >
                            <div
                              style={{ minWidth: "200px" }}
                              className="text-center pt-1 pb-1"
                            >
                              <h4 className="title font-weight-normal mb-0">
                                Area Médica
                              </h4>
                            </div>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row className="align-items-center">
                      <Col md={6}>
                        {/* <img
                          src={app2}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        /> */}
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Area Legal
                          </h4>
                          <p className="text-muted">
                            Contamos con el compromiso y conocimientos del
                            Estudio Jurídico Durio & Asoc. , especialistas en la
                            materia de Daños y Perjuicios, quienes elaboran cada
                            reclamo de manera individual, estudiando de forma
                            acabada cada caso en particular, logrando de esta
                            manera el mejor resultado en el menor tiempo
                            posible.
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Estudio Juridico con mas de 30 años de
                              experiencia, seriedad y compromiso.
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Más de 8 años de experiencia en el rubro de los
                              accidentes de tránsito.
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Equipo integrado por 6 personas dedicadas
                              exclusivamente a los siniestros, logrando agilidad
                              y sencillez para el cobro de los derechos de sus
                              clientes.
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="align-items-center">
                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Area Reparaciones Vehiculares
                          </h4>
                          <p className="text-muted">
                            GRUPO SATYA cuenta con uno de los mejores talleres
                            de chapa-pintura y mecánica ligera de la provincia
                            de Córdoba. Estamos hablando del taller THE GARAGE
                            SERVICE. El mismo cuenta con la certificación de
                            GLASURIT, siendo a su vez, el único taller de
                            Córdoba en cumplir con las exigentes normas ISO9001.
                            THE GARAGE SERVICE, trabaja con diversas compañías
                            de seguro de primera línea. Cuenta con un equipo de
                            más de 20 personas encargadas de realizar la
                            reparación más acertada de un vehículo, siendo uno
                            de los pocos talleres que poseen cabina de
                            presurización para la mejor terminación en sus
                            trabajos.
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Para más información, accede a su{" "}
                              <a
                                target="_blank"
                                href="https://garageservice.com.ar/"
                                rel="noopener noreferrer"
                              >
                                sitio web
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        {/* <img
                          src={app1}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        /> */}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        {/* <img
                          src={app3}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        /> */}
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Area Médica
                          </h4>
                          <p className="text-muted">
                            GRUPO SATYA se encarga de todo tipo de reclamo ante
                            las compañías, incluso en caso de que se haya
                            lesionado el damnificado. Es por ello, que cuenta
                            con el equipo de médicos legistas especializados
                            sobre el tema del Consultorio Médico del Dr. Rodolfo
                            Martínez, quien con sus más de 40 años de
                            experiencia en la materia, nos brinda una mirada y
                            apoyo tanto en informes de incapacidad como en
                            juntas médicas, entre otros aspectos.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row>
              <div className="home-shape-bottom">
                <img
                  src={roundWhite}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ShowCase;
