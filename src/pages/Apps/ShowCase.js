// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import app1 from "../../images/app/1.png";
import app2 from "../../images/app/2.png";
import app3 from "../../images/app/3.png";
import app4 from "../../images/app/4.png";
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
                                Area Digital
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
                                Area Reparaciones
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
                        <img
                          src={app2}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
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
                              Digital Marketing Solutions for Tomorrow
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Our Talented & Experienced Marketing Agency
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Create your own skin to match your brand
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app3}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Area Digital
                          </h4>
                          <p className="text-muted">
                            El equipo del programador Santiago Garzón , cuenta
                            con la ardua tarea de facilitar al asegurado las
                            herramientas para que realizar el reclamo sea un
                            acto sencillo y ágil como así también realizar
                            procedimientos internos tendientes a la mejora
                            continua de la gestión de reclamo ante las compañías
                            de seguro.
                          </p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Ultimas tecnologias usadas en nuestras Apps.
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Bases de datos de nuestra compañia asegurada en la
                              nube.
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Aplicamos Deep learning en nuestros datos para
                              predecir tendencias.
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={app4}
                          className="img-fluid mx-auto d-block"
                          alt=""
                        />
                      </Col>

                      <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                          <h4 className="title mb-4">
                            <i className="mdi mdi-chevron-double-right text-primary"></i>{" "}
                            Area Reparaciones
                          </h4>
                          <p className="text-muted">chamuyar aqui</p>
                          <ul className="list-unstyled feature-list text-muted">
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Digital Marketing Solutions for Tomorrow
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Our Talented & Experienced Marketing Agency
                            </li>
                            <li>
                              <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                              Create your own skin to match your brand
                            </li>
                          </ul>
                          <Link to="#" className="mt-3 text-primary">
                            Find Out More{" "}
                            <i className="mdi mdi-chevron-right"></i>
                          </Link>
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
