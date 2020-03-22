// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Collapse } from "reactstrap";

class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: true,
      t2: false,
      t3: false,
      t4: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="bg-half bg-light">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg={12} className="text-center">
                    <div className="page-next-level">
                      <h4 className="title"> Preguntas Frecuentes</h4>
                      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                        <li>
                          <Link
                            to="/"
                            className="text-uppercase font-weight-bold text-dark"
                          >
                            Inicio
                          </Link>
                        </li>
                        <li>
                          <span className="text-uppercase text-primary font-weight-bold">
                            Preguntas Frecuentes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-60">
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="p-3 shadow border rounded">
                  <h5 className="">
                    Preguntas y Respuestas de nuestros usuarios :
                  </h5>
                  <div className="faq-content mt-4">
                    <div className="accordion" id="accordionExample">
                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t1
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                          onClick={() =>
                            this.setState({
                              t1: !this.state.t1,
                              t2: false,
                              t3: false,
                              t4: false,
                              t5: false
                            })
                          }
                        >
                          <div
                            className="card-header bg-light p-3"
                            id="headingOne"
                          >
                            <h4 className="title mb-0 faq-question">
                              {" "}
                              ¿Cuánto tiempo tengo para iniciar mi reclamo?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t1}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              El plazo que otorga la ley a los fines de poder
                              iniciar un reclamo es de tres (3) años desde el
                              momento del accidente. En caso que pase más
                              tiempo, el mismo corre riesgo de prescribir.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t2
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                          onClick={() =>
                            this.setState({
                              t2: !this.state.t2,
                              t1: false,
                              t3: false,
                              t4: false,
                              t5: false
                            })
                          }
                        >
                          <div
                            className="card-header bg-light p-3"
                            id="headingOne"
                          >
                            <h4 className="title mb-0 faq-question">
                              {" "}
                              ¿Cuánto tiempo tienen las personas que sufrieron
                              el accidente para realizar la denuncia en su
                              respectiva compañía de seguros?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t2}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              Conforme la ley de seguros (Ley 17.418) establece
                              que el plazo máximo para informar acerca de un
                              siniestro sufrido a la propia compañía de seguros
                              es de tres (3) días. Sin embargo,
                              jurisprudencialmente el mismo puede ser superior.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t3
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                          onClick={() =>
                            this.setState({
                              t3: !this.state.t3,
                              t1: false,
                              t2: false,
                              t4: false,
                              t5: false
                            })
                          }
                        >
                          <div
                            className="card-header bg-light p-3"
                            id="headingOne"
                          >
                            <h4 className="title mb-0 faq-question">
                              {" "}
                              ¿Si no tengo seguro, puedo iniciar mi reclamo?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t3}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              Si, se puede. En caso que no poseas seguro o no
                              tengas cobertura al momento del siniestro por
                              falta de pago, aún así se puede reclamar. Para
                              ello será necesario que presentes una “constancia
                              de NO seguro” la cual debe ser requerida a una
                              repartición policial.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t4
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                          onClick={() =>
                            this.setState({
                              t4: !this.state.t4,
                              t1: false,
                              t3: false,
                              t2: false,
                              t5: false
                            })
                          }
                        >
                          <div
                            className="card-header bg-light p-3"
                            id="headingOne"
                          >
                            <h4 className="title mb-0 faq-question">
                              {" "}
                              ¿En caso de que haya sufrido alguna lesión, la
                              compañía del tercero debe indemnizarme?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t4}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              Si, puede reclamar en el caso de que haya sufrido
                              una lesión. Para ello, luego de que se haya
                              reunido con nuestros médicos especialistas, los
                              mismos elaborarán un informe donde conste el grado
                              de incapacidad que devino del siniestro. Por ese
                              porcentaje, a través de una fórmula especial, se
                              calcula el monto dinerario potencial a cobrar.
                              Asimismo, también se puede reclamar daño moral,
                              lucro cesante, daño emergente, desvalorización
                              venal, entre otros.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t5
                              ? "faq position-relative text-primary"
                              : "faq position-relative text-dark"
                          }
                          onClick={() =>
                            this.setState({
                              t5: !this.state.t5,
                              t1: false,
                              t2: false,
                              t3: false,
                              t4: false
                            })
                          }
                        >
                          <div
                            className="card-header bg-light p-3"
                            id="headingOne"
                          >
                            <h4 className="title mb-0 faq-question">
                              {" "}
                              ¿La gestión que realiza GRUPO SATYA tiene costo
                              alguno para el asegurado?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t5}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              No, es totalmente gratuito en el caso de reclamar
                              solamente daños materiales, es decir, el arreglo
                              del vehículo. Solo en los casos de reclamar
                              lesiones, se pacta un porcentaje del cinco por
                              ciento (5%) en concepto de honorarios del total de
                              capital que eventualmente cobrase el asegurado.
                            </p>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>
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
export default FAQs;
