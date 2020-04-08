// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import about from "../images/nosotros.jpg";

// Modal Video
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import ShowCase from "../pages/Apps/ShowCase";

class PageAboutUs extends Component {
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

  componentDidMount() {
    document.body.classList = "";
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
                      <h4 className="title"> Sobre Nosotros </h4>
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
                            Sobre Nosotros
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
        <section>
          <div className="container">
            <Row className="align-items-center">
              <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative about-us">
                  <img
                    src={about}
                    className="rounded img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>
              </Col>

              <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ml-lg-4">
                  <h4 className="title mb-4">Quienes Somos</h4>
                  <p className="text-muted">
                    <span className="text-primary"> GRUPO SATYA</span> es una
                    firma dedicada a la gestión integral de los reclamos
                    administrativos de terceros ante las compañías de seguros en
                    razon a un accidente de transito. Para que la misma sea
                    absolutamente eficiente, cuenta con un equipo de gran
                    trayectoria y renombre, donde cada sector es especialista en
                    la materia que desempeña.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <ShowCase />
        </section>

        <section className="pt-5 pb-5 mb-5">
          <div className="container">
            <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="main-title mb-4">
                    Queres reclamar tu siniestro? Hablanos!
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Empeza a trabajar con{" "}
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>
                    , la solución definitiva a tus reclamos.
                  </p>
                  <a href="iniciar-reclamo" className="btn btn-primary mt-4">
                    Iniciar reclamo <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageAboutUs;
