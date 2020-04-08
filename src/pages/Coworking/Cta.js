// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// Modal Video
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import documentacion from "../../images/icon/insurance.svg";
import reclamo from "../../images/icon/membership.svg";
import firma from "../../images/icon/pen.svg";
import cobro from "../../images/icon/ticket3.svg";

class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container ">
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

            <Row className="align-items-center">
              <Col md={3} className="col-12 mt-4 pt-2">
                <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                  <div className="lable text-center bg-primary pt-2 pb-2">
                    <h4 className="best text-white mb-0 text-uppercase">1</h4>
                  </div>
                  <img src={reclamo} className="mb-4" height="50" alt="" />
                  <h2 className="title text-uppercase mb-4">Iniciar Reclamo</h2>

                  <p className="text-muted pb-2">
                    Comenza este proceso con nosotros llenando un breve
                    formulario, compartiendonos tus datos y los del accidente.
                  </p>
                  <Link
                    to="/iniciar-reclamo"
                    className="btn btn-outline-primary btn-sm mt-4 mb-2"
                  >
                    Iniciar Ahora
                  </Link>
                </div>
              </Col>

              <Col md={3} className="col-12 mt-4 pt-2">
                <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                  <div className="lable text-center bg-primary pt-2 pb-2">
                    <h4 className="best text-white mb-0 text-uppercase">2</h4>
                  </div>
                  <img
                    src={documentacion}
                    className="mb-4"
                    height="50"
                    alt=""
                  />
                  <h2 className="title text-uppercase mb-4">Documentación</h2>
                  <p className="text-muted">
                    Requerimos ciertos datos para poder gestionar el reclamo
                    administrativo, entre ellos: foto de DNI, carnet de
                    conducir, tarjeta verde del automóvil, fotografias,
                    denuncia, etc.
                  </p>
                </div>
              </Col>

              <Col md={3} className="col-12 mt-4 pt-2">
                <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                  <div className="lable text-center bg-primary pt-2 pb-2">
                    <h4 className="best text-white mb-0 text-uppercase">3</h4>
                  </div>
                  <img src={firma} className="mb-4" height="50" alt="" />
                  <h2 className="title text-uppercase mb-4">Firma</h2>

                  <p className="text-muted">
                    Te enviaremos el reclamo administrativo a tu casilla de
                    correo para que puedas controlar todo lo que allí se
                    describe para luego firmarlo y permitirnos negociar con las
                    aseguradoras.
                  </p>
                </div>
              </Col>

              <Col md={3} className="col-12 mt-4 pt-2">
                <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                  <div className="lable text-center bg-primary pt-2 pb-2">
                    <h4 className="best text-white mb-0 text-uppercase">4</h4>
                  </div>
                  <img src={cobro} className="mb-4" height="50" alt="" />
                  <h2 className="title text-uppercase mb-4">Cobro</h2>

                  <p className="text-muted">
                    Llegado a un acuerdo con la aseguradora, existe un plazo de
                    30 días a partir de la resolución, para que el pago sea
                    efectuado a nombre del titular registral del automóvil
                    pertinente.
                  </p>
                  {/* <Link
                    to="/instructivo"
                    className="btn btn-outline-primary btn-sm mt-4"
                  >
                    Ver Instructivo
                  </Link> */}
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Cta;
