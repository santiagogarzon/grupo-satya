// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

//import images
import featureImg from '../../images/app/feature.png';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">App Features</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center align-items-center">
                            <Col lg={8} md={8}>
                                <Row>
                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-monitor-cellphone-star icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">Use On Any Device</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-cube-outline icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">Material Design Icon</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-cryengine icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">Retina Ready</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-check-decagram icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">W3c Valid Code</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-responsive icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">Fully Responsive</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6} className="col-12">
                                        <div className="features p-1 pt-4 pb-4">
                                            <i className="mdi mdi-cards-heart icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">Browser Compatibility</h4>
                                                <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={4} className="col-12 pt-2 pt-sm-0">
                                <img src={featureImg} className="img-fluid mx-auto d-block" alt="" />
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
