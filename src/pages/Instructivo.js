// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Faq from "../components/Shared/Faq";

class Instructivo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
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
                      <h4 className="title"> Instructivo </h4>
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
                          <Link
                            to="#"
                            className="text-uppercase font-weight-bold text-dark"
                          >
                            Reclamos
                          </Link>
                        </li>
                        <li>
                          <span className="text-uppercase text-primary font-weight-bold">
                            Instructivo
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

        <section className="section">
          <div className="container">
            <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="main-title mb-4">
                    Lo que necesitas para que tu reclamo sea facil, rapido y
                    seguro.
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    A continuación detallaremos de manera detallada el{" "}
                    <span className="text-primary font-weight-bold">
                      proceso{" "}
                    </span>
                    de Reclamo Extrajudicial ante diversas compañías de Seguros.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <Faq />
      </React.Fragment>
    );
  }
}
export default Instructivo;
