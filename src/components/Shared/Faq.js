// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Import image
import shapeDark from "../../images/shapes/shape-dark.png";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <div className="container">
            <Row>
              <Col md={6} className="col-12">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Tomar conocimiento del siniestro
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Lo primero que debe hacer nuestro cliente dirigirse, al
                    sector de <a href="iniciar-reclamo">“Iniciar Reclamo”</a>.
                    Allí deberá introducir los datos solicitados a fin que en
                    las próximas 24 hs. hábiles un representante de GRUPO SATYA
                    se estará comunicando con el mismo a fin de requerir la
                    documentación necesaria para iniciar el reclamo.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Que documentación necesito?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    A los fines de poder analizar el siniestro, nos pondremos en
                    contacto con nuestros clientes donde le solicitaremos cierta
                    documentacion para poder gestionar el reclamo
                    administrativo, entre ellos: foto de DNI, carnet de
                    conducir, tarjeta verde del automóvil,fotos de los daños del
                    automotor, presupuesto de mano de obra y repuestos, denuncia
                    administrativa y certificado de cobertura, estas últimas
                    emitidas por la propia compañía de seguros del damnificado.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Como debo compartir mi{" "}
                    <span className="text-primary">DNI</span>?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Se precisa escaneo o fotos de ambos lados del DNI del
                    titular registral (quien figura como titular en la Tarjeta
                    Verde) del vehículo damnificado como así también del
                    conductor al momento del siniestro, donde se vea claramente
                    los datos insertos en el mismo.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Como debo compartir mi{" "}
                    <span className="text-primary">Tarjeta Verde</span>?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Se necesita escaneo o fotos de ambos lados de la Tarjeta
                    Verde del rodado. Esto nos informa quien es el titular
                    registral al momento del siniestro, y en base a ello, quien
                    será quien va a firmar el reclamo.
                  </p>
                </div>
              </Col>
              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Como debo compartir mi{" "}
                    <span className="text-primary">Licencia de Conducir</span>?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Escaneo o fotos de ambos lados de la Licencia de Conducir
                    vigente al momento del siniestro. Debe pertenecer el
                    conductor al momento del siniestro, donde se vea claramente
                    los datos insertos en el mismo. .
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Como debo compartir mi{" "}
                    <span className="text-primary">Fotos de los daños</span>?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Necesitaremos, al menos 5 fotografías de los daños del
                    vehículo: foto de ambos laterales, de frente y detrás del
                    automóvil como así también varias fotos directamente del
                    daño en particular.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    <span className="text-primary">
                      Presupuesto de Mano de Obra y Repuestos
                    </span>
                    ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Para conseguir dicha documentación, es necesario que
                    nuestros clientes se dirijan a un taller de chapa y pintura
                    a fin de que ellos verifiquen los daños que posee el rodado
                    y calcular el monto estimativo de reparación. Para este
                    caso, contamos con{" "}
                    <a
                      target="_blank"
                      href="https://garageservice.com.ar/"
                      rel="noopener noreferrer"
                    >
                      THE GARAGE SERVICE
                    </a>{" "}
                    quienes con más de 20 de años de experiencia en el mercado,
                    realizarán sin costo alguno el presupuesto de mano de obra y
                    repuestos de su vehículo de manera rápida y sencilla.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Que es la{" "}
                    <span className="text-primary">
                      Constancia de Cobertura
                    </span>
                    ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Una vez realizada la Denuncia Administrativa, deberán
                    nuestros clientes, exigirles a quien les tomó dicha
                    denuncia, tanto compañias de seguro o Productores Asesores
                    de Seguro, que les faciliten el certificado de cobertura que
                    tenían al momento del siniestro. En caso que cuenten con una
                    cobertura de “Todo Riesgo”, le deberán entregar la llamada
                    “Carta de Franquicia” donde consta el monto de la franquicia
                    conjuntamente con sus condiciones.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de{" "}
                    <span className="text-primary">
                      Validación de documentación
                    </span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Una vez obtenida la documentación solicitada, en un plazo
                    máximo de 24hs, analizaremos la misma a fin de informarle si
                    procede correctamente el reclamo o habría que modificar
                    algún dato. En ambos casos, nos contactaremos de inmediato
                    con nuestro cliente.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de{" "}
                    <span className="text-primary">Redacción del Reclamo</span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    En un plazo no mayor a 48hs, procederemos a redactar el
                    reclamo administrativo extrajudicial contra la compañía de
                    seguros, que consistirá en la redacción de los hechos y los
                    derechos que a nuestro cliente amparan conforme lo
                    denunciado por el mismo en su propia compañía de seguros.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Que es la{" "}
                    <span className="text-primary">
                      Denuncia Administrativa
                    </span>
                    ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Le solicitaremos a nuestros clientes, la Denuncia
                    Administrativa realizada en su propia compañía de seguros,
                    tanto en la misma oficina o a través de un Productor Asesor
                    de Seguros, quien se las otorgará en el instante en que la
                    realicen. La misma es vital a la hora de realizar el reclamo
                    extrajudicial ante la compañía del tercero, ya que en base a
                    los dichos vertidos en la denuncia propia, se redacta el
                    reclamo. En el caso de no poseer póliza de seguros vigente
                    al momento del siniestro, deberán dirigirse a una
                    repartición Policial a fin de solicitarle la denominada
                    “Constancia de NO Seguro”. Con dicha documentación, se
                    sustituye la Denuncia Administrativa.
                  </p>
                </div>
              </Col>
              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de{" "}
                    <span className="text-primary">Firma del reclamo</span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    En el caso que se trate de una compañia de seguros que
                    acepta la modalidad digital para sus reclamos, le enviaremos
                    el reclamo administrativo a la casilla de correo de nuestro
                    cliente, previamente informada por el mismo, a fin que pueda
                    controlar absolutamente todo lo que allí se describe para
                    luego firmarlo. En cuanto a la firma, esta debe hacerse ni
                    bien termina el texto, conforme se figura en la imagen
                    descriptiva. Paso siguiente, escanear la hoja firmada o en
                    su defecto una foto con gran nitidez, para enviarnos la
                    misma y poder presentarla nosotros ante la compañía de
                    seguros correspondiente. Para el supuesto en que la Compañía
                    a la cual reclamamos no ofrezca una alternativa digital,
                    citaremos en nuestro Estudio Jurídico al cliente con el
                    objeto que pueda firmar de manera ológrafa el Reclamo
                    Extrajudicial.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de{" "}
                    <span className="text-primary">
                      Presentación del Reclamo
                    </span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Cuando recibamos el reclamo firmado, procederemos en un
                    plazo no mayor a las 24 hs hábiles, a cargar el reclamo en
                    la web de la compañía de seguros reclamada en el caso de ser
                    digital o presentarlo personalmente en caso de no serlo.
                    Recien alli poseeremos un número de siniestro y donde a
                    partir de allí se cuentan los 30 días que la ley le otorga a
                    las compañías de seguro para tener una resolución en cuanto
                    al siniestro reclamado.
                  </p>
                </div>
              </Col>
              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de{" "}
                    <span className="text-primary">Resolución de reclamo</span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Transcurridos los 30 días establecidos (cabe aclarar que
                    cada compañía puede manejarse con plazos un tanto mayores)
                    la reclamada nos informará acerca de la resolución. La misma
                    puede ser favorable o desfavorable conforme los fundamentos
                    que tenga la misma. Sin embargo tanto si es desfavorable
                    como si es favorable pero en un monto menor al que
                    solicitamos, tenemos la potestad de plantear una
                    “Reconsideración” ante la misma a fin que replanteen dicha
                    resolución.
                  </p>
                </div>
              </Col>

              <Col md={6} className="col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4"></i>{" "}
                    Proceso de <span className="text-primary">Cobranza</span>
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Llegado a un acuerdo entre la compañía reclamada y nuestro
                    cliente en cuanto al monto dinerario indemnizatorio o lugar
                    de reparación del rodado, y firmado el acuerdo por las
                    partes, la compañía tiene un plazo de 30 días para abonar
                    dicho dinero que puede ser tanto por transferencia como
                    mediante cheque de pago diferido, siempre a nombre del
                    titular registral del automóvil en cuestión. En el caso de
                    ser mediante transferencia, es necesario que el titular del
                    vehículo en cuestión, nos brinde una constancia de CBU a su
                    nombre, emitida por el Banco de donde provenga de manera
                    personal o en su defecto a través del “Home Banking” de
                    dicho banco.
                  </p>
                </div>
              </Col>
            </Row>

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
          <div className="container-fluid">
            <Row>
              <div className="home-shape-bottom">
                <img
                  src={shapeDark}
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
export default Faq;
