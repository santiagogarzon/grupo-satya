// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import roundLight from '../../images/shapes/round-light.png';

class KeyFeature extends Component {

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
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Template Key Features</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-internet-explorer text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}  className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cryengine text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Retina Ready</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6}  className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-bootstrap text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Based On Bootstrap 4</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cube-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Material Design Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-sass text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Built With SASS</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-check-decagram text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-vector-bezier text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Flaticon Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col  lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-settings-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Easy to customize</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <div className="row justify-content-center">
                            <Col className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={roundLight} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default KeyFeature;
