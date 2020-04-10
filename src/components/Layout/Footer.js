import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <Link className="logo-footer" to="#">
                  Grupo Satya<span className="text-primary">.</span>
                </Link>
                <p className="mt-4">
                  Empeza a trabajar con nosotros para que te proveamos de la
                  seguridad y eficiencia que estas buscando.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/Grupo-Satya-109231744053265"
                      target="_blank"
                      className="rounded mr-1"
                      rel="noopener noreferrer"
                    >
                      <i className="mdi mdi-facebook" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/grupo.satya/"
                      target="_blank"
                      className="rounded mr-1"
                      rel="noopener noreferrer"
                    >
                      <i className="mdi mdi-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/GrupoSatya"
                      target="_blank"
                      className="rounded mr-1"
                      rel="noopener noreferrer"
                    >
                      <i className="mdi mdi-twitter" title="Twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-8 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Empresa</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <Link to="/" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre-nosotros" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Sobre
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="/preguntas-frecuentes" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Preguntas
                      Frecuentes
                    </Link>
                  </li>
                  <li>
                    <Link to="/terminos-y-condiciones" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Terminos y
                      Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/iniciar-reclamo" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1"></i> Iniciar
                      Reclamos
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Newsletter</h4>
                <p className="mt-4">
                  Inscribite y recibi nuestras novedades via email.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe form-group position-relative">
                        <label>
                          Escribi tu Email{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <i className="mdi mdi-email ml-3 icons"></i>
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control pl-5 rounded"
                          placeholder="Tu email : "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn btn-primary w-100"
                        value="Suscribite"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Grupo Satya.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0"></div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
