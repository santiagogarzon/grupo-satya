// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Alert } from "reactstrap";

class PageJobApply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false,
      Contactvisible: false,
      name: "",
      email: "",
      phone: "",
      productor: "",
      aseguradora: "",
      accidente: "",
      terminosYCondiciones: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.scrollTo(0, 0);
  }

  sendReclamo(variables) {
    window.emailjs
      .send("gmail", "reclamo", variables)
      .then(res => {
        this.setState({ Contactvisible: true, emailSent: true });
        window.scrollTo(0, document.getElementById("form").offsetTop - 79);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendReclamo({
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      productor: this.state.productor,
      aseguradora: this.state.aseguradora,
      accidente: this.state.accidente
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheckboxChange = event =>
    this.setState({ terminosYCondiciones: event.target.checked });

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
                      <h4 className="title"> Formulario de Reclamo </h4>
                      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                        <li>
                          <Link
                            to="index"
                            className="text-uppercase font-weight-bold text-dark"
                          >
                            Inicio
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="ml-1 text-uppercase font-weight-bold text-dark"
                          >
                            Servicios
                          </Link>
                        </li>
                        <li>
                          <span className="ml-1 text-uppercase text-primary font-weight-bold">
                            Iniciar Reclamo
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
            <Row className="mt-md-5 pt-md-3 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <Col className="text-center">
                <div className="section-title">
                  <h4 className="main-title mb-4 mt-4">
                    Haz el primer paso, inicia tu reclamo con nosotros!
                  </h4>
                  <p className="text-muted para-desc mx-auto">
                    Llena este sencillo formulario para que uno de nuestros
                    representates se contacte con vos en las proxima 24 hrs.
                    Empeza a trabajar con{" "}
                    <span className="text-primary font-weight-bold">
                      Grupo Satya
                    </span>
                    , la solución definitiva a tus reclamos.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="mt-5 mb-5" id="form">
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={10} md={7}>
                <div className="custom-form">
                  <Alert
                    id="message-sent"
                    color="info"
                    isOpen={this.state.Contactvisible}
                    toggle={() => {
                      this.setState({
                        Contactvisible: !this.state.Contactvisible
                      });
                    }}
                  >
                    Formulado enviado correctamente
                  </Alert>
                  <form
                    onSubmit={this.handleSubmit}
                    className="rounded shadow p-4"
                  >
                    <Row>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>
                            Tu Nombre y Apellido :
                            <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-account ml-3 icons"></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control pl-5"
                            placeholder="Nombre y Apellido:"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>
                            Correo de Email :
                            <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-email ml-3 icons"></i>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control pl-5"
                            placeholder="Tu Email :"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group position-relative">
                          <label>
                            Numero Telefonico :
                            <span className="text-danger">*</span>
                          </label>
                          <i className="mdi mdi-phone ml-3 icons"></i>
                          <input
                            name="phone"
                            id="phone"
                            type="number"
                            className="form-control pl-5"
                            placeholder="Tu Telefono :"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            required
                          />
                        </div>
                      </Col>
                      {/* <Col md={6}>
                        <div className="form-group position-relative">
                          <label>Nombre de Productor :</label>
                          <i className="mdi mdi-book ml-3 icons"></i>
                          <input
                            name="productor"
                            id="productor"
                            className="form-control pl-5"
                            placeholder="Tu Productor:"
                            value={this.state.productor}
                            onChange={this.handleChange}
                          />
                        </div>
                      </Col> */}
                      {/* <Col md={6}>
                        <div className="form-group">
                          <label>Aseguradora del tercero:</label>
                          <span className="text-danger">*</span>
                          <select
                            className="form-control"
                            id="aseguradora"
                            name="aseguradora"
                            value={this.state.aseguradora}
                            onChange={this.handleChange}
                          >
                            <option>Federacion Patronal</option>
                            <option>Rivadavia</option>
                            <option>Río Uruguay</option>
                            <option>Mapfre</option>
                            <option>La Mercantil Andina</option>
                            <option>Meridional</option>
                            <option>Libra</option>
                            <option>Segurcoorp</option>
                            <option>La Caja</option>
                            <option>Zurich</option>
                            <option>Segurcoorp</option>
                            <option>La Caja</option>
                            <option>QBE seguros</option>
                            <option>Sura</option>
                            <option>Provincia Seguros</option>
                            <option>Escudo seguros</option>
                            <option>Liderar</option>
                            <option>El Norte</option>
                            <option>La Holando</option>
                            <option>Allianz</option>
                            <option>Orbis</option>
                            <option>Nación</option>
                            <option>Paraná</option>
                            <option>La Segunda</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="form-group position-relative">
                          <label>Descripción del Accidente:</label>
                          <span className="text-danger">*</span>
                          <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                          <textarea
                            name="accidente"
                            id="accidente"
                            rows="4"
                            className="form-control pl-5"
                            placeholder="Describe el accidente :"
                            value={this.state.accidente}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                      </Col> */}
                      <Col md={12}>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input checkbox-reclamo "
                              id="terminosYCondiciones"
                              name="terminosYCondiciones"
                              checked={this.state.terminosYCondiciones}
                              onChange={this.handleCheckboxChange}
                            />
                            <label className="custom-control-label label-checkbox">
                              Acepto{" "}
                              <Link
                                to="/terminos-y-condiciones"
                                className="text-primary"
                              >
                                los Terminos y Condiciones
                              </Link>
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Iniciar Reclamo"
                          onClick={this.handleSubmit}
                          disabled={
                            !this.state.terminosYCondiciones ||
                            this.state.emailSent
                          }
                        />
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default PageJobApply;
