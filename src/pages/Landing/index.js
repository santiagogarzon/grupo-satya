// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

// import images
import services from "../../images/illustrator/services.svg";

// import generic componenets
import Feature from "./Feature";
import Counter from "./Counter";
import Testimonial from "./Testimonial";
import Partner from "../../components/Shared/Partner";
import Steps from "./Steps";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Index extends Component {
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
                  <Col lg={7} md={7}>
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
                          to="page-services"
                          className="btn btn-primary mb-2 mr-2"
                        >
                          Nuestros Servicios
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
                          videoId="L61p2uyiMSo"
                          onClose={() => this.setState({ isOpen: false })}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <img src={services} alt="" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        {/* Feature */}
        <Feature />

        <Steps />

        {/* Partner */}
        <section className="pt-5 pb-5 border-bottom">
          <div className="container">
            <Row className="justify-content-center">
              <Partner />
            </Row>
          </div>
        </section>

        {/* <Counter /> */}

        {/* Testimonial */}
        {/* <Testimonial /> */}
      </React.Fragment>
    );
  }
}

export default Index;
