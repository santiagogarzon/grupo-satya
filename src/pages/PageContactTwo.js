// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Alert } from "reactstrap";

class PageContactTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  componentDidMount() {
    document.getElementById("topnav").classList.add("bg-white");
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
        <section className="section pt-5 mt-4">
          <div className="container-fluid">
            <Row>
              <Col className="p-0">
                <div className="map">
                  <iframe
                    title="Grupo Satya"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=duarte%20quiroz%20520%2C%20cordoba%2C%20argentina+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
          <div className="container mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={6}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
              >
                <div className="custom-form p-4 rounded shadow">
                  <div id="message"></div>
                  <Alert
                    color="info"
                    isOpen={this.state.Contactvisible}
                    toggle={() => {
                      this.setState({
                        Contactvisible: !this.state.Contactvisible
                      });
                    }}
                  >
                    Detalles de contacto enviados correctamente.
                  </Alert>
                  <form
                    method="post"
                    onSubmit={this.handleSubmit}
                    name="contact-form"
                    id="contact-form"
                  >
                    <Row>
                      <Col lg={6}>
                        <div className="form-group position-relative">
                          <label>
                            Tu Nombre<span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control pl-5"
                            placeholder="Tu Nombre:"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="form-group position-relative">
                          <label>
                            Tu Email <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-email ml-3 icons"></i>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control pl-5"
                            placeholder="Tu Email :"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form-group position-relative">
                          <label>Comentarios</label>
                          <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control pl-5"
                            placeholder="Tu mensaje :"
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="col-sm-12 text-center">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary btn-block"
                          value="Enviar Mensaje"
                        />
                        <div id="simple-msg"></div>
                      </div>
                    </Row>
                  </form>
                </div>
              </Col>

              <Col lg={7} md={6} className="order-1 order-md-2">
                <div className="title-heading ml-lg-4">
                  <h4 className="mb-4">Detalles de Contacto</h4>
                  <p className="text-muted">
                    Contactate con los representates de{" "}
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>{" "}
                    recibiras una respuesta en las proximas 24 hrs.
                  </p>
                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-email-variant text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Email</h4>
                      <a
                        href="mailto:contact@example.com"
                        className="text-primary h6"
                      >
                        contacto@grupo-satya.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-phone text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Telefono</h4>
                      <a href="tel:+152534-468-854" className="text-primary h6">
                        +54 3513981656
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail mt-3">
                    <div className="icon mt-3 float-left">
                      <i className="mdi mdi-map-marker-outline text-muted mdi-36px mr-3"></i>
                    </div>
                    <div className="content mt-3 overflow-hidden d-block">
                      <h4 className="title font-weight-bold mb-0">Ubicación</h4>
                      <Link
                        to="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        className="video-play-icon h6 text-primary"
                      >
                        Ver en Google Maps
                      </Link>
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
export default PageContactTwo;
