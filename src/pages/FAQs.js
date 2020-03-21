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
                  <h5 className="">Preguntas y Respuestas de los usuarios :</h5>
                  <div className="faq-content mt-4">
                    <div className="accordion" id="accordionExample">
                      <Card className="border rounded shadow mb-2">
                        <Link
                          className={
                            this.state.t1
                              ? "faq position-relative text-secondary"
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
                              Dummy text is text that is used in the publishing
                              industry ?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t1}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form.
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
                              Web designers to occupy the space which will later
                              be filled ?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t2}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form.
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
                              This is required when, for example, the final text
                              is not yet available ?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t3}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form.
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
                              The most well-known dummy text is the 'Lorem
                              Ipsum', which is said ?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t4}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form.
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
                              Lorem Ipsum is composed in a pseudo-Latin language
                              ?{" "}
                            </h4>
                          </div>
                        </Link>
                        <Collapse isOpen={this.state.t5}>
                          <CardBody>
                            <p className="text-muted mb-0 faq-ans">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form.
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
