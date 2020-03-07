// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import curveDark from '../../images/shapes/curve-dark.png';

// client images
import client1 from '../../images/client/01.jpg';
import client3 from '../../images/client/03.jpg';

class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Whats Our Clients Said About <span className="text-primary">Landrick</span> Project</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={9} className="text-center">
                                <Row>
                                    <Col md={6}>
                                        <div className="customer-testi text-left">
                                            <img src={client1} height="80" className="rounded shadow float-left mr-3" alt="" />
                                            <div className="content overflow-hidden d-block p-3 shadow rounded bg-white">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <p className="text-muted mt-2">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                                <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="customer-testi text-left">
                                            <img src={client3} height="80" className="rounded shadow float-left mr-3" alt="" />
                                            <div className="content overflow-hidden d-block p-3 shadow rounded bg-white">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star-half text-warning"></i></li>
                                                </ul>
                                                <p className="text-muted mt-2">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                                <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started Now</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={curveDark} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Client;
