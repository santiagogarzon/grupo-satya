// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import services from "../../images/landingWithLogo.jpg";

// import generic componenets
import Feature from "./Feature";
//import Partner from "../../components/Shared/Partner";
import Cta from "../Coworking/Cta";
import Steps from "./Steps";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import ReactGA from "react-ga";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    window.scrollTo(0, 0);
  }
  openModal() {
    ReactGA.event({
      category: "Video",
      action: "Press video button"
    });
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
        {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

        {/* Hero Start */}
        <section className="bg-half-170" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="align-items-center">
                  <Col lg={5} md={5}>
                    <div className="title-heading mt-4">
                      <h1 className="heading mb-3">
                        La solución para <br />
                        tu siniestro
                      </h1>
                      <p className="para-desc text-muted">
                        La manera más simple y rápida de resolver tu siniestro.
                      </p>
                      <div className="watch-video mt-4 pt-2">
                        <Link
                          className="btn btn-primary mb-2 mr-2 only-desktop"
                          to="/#"
                          onClick={event => {
                            event.preventDefault();
                            window.scrollTo(
                              0,
                              document.getElementById("quienes-somos")
                                .offsetTop - 100
                            );
                          }}
                        >
                          Quiero saber más
                        </Link>
                        <Link
                          className="btn btn-primary mb-2 mr-2 mobile-button"
                          to="/iniciar-reclamo"
                        >
                          Iniciar Reclamo
                        </Link>
                        <Link
                          onClick={this.openModal}
                          to="#"
                          className="ml-1 video-play-icon watch text-dark mb-2"
                        >
                          <i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i>{" "}
                          Video
                        </Link>
                        <ModalVideo
                          channel="youtube"
                          isOpen={this.state.isOpen}
                          videoId="mFY0BS9eT7A"
                          onClose={() => this.setState({ isOpen: false })}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <img width="100%" src={services} alt="" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        {/* Feature */}
        <Feature />

        <Cta />

        <Steps />

        {/* Logos comentados 
        <section className="pt-5 pb-5 border-top border-bottom">
          <div className="container">
            <Row className="justify-content-center">
              <Partner />
            </Row>
          </div>
        </section> */}

        <section className="pt-5 pb-5 mb-5">
          <div className="container">
            <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="main-title mb-4">
                    Tienes alguna pregunta ? Contactate!
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
        {/*  */}

        {/* <Counter /> */}

        {/* Testimonial */}
        {/* <Testimonial /> */}
      </React.Fragment>
    );
  }
}

export default Index;
