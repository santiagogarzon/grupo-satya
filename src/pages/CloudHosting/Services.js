// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import computer from '../../images/icon/computer.svg';
import cloud from '../../images/icon/cloud.svg';
import server from '../../images/icon/server.svg';
import big from '../../images/icon/big.svg';
import database from '../../images/icon/database.svg';
import refresh from '../../images/icon/refresh.svg';
import shapeLight from '../../images/shapes/shape-light.png';

class Services extends Component {

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
                        <Row className="align-items-center mb-4">
                            <Col lg={9} md={8} className="text-sm-left">
                                <div className="section-title">
                                    <h4 className="main-title mb-4">Cloud Hosting Services</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0">
                                <Link to="#" className="btn btn-outline-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={computer} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Domain Name</h4>
                                        <p className="text-muted">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={cloud} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Cloud Hosting</h4>
                                        <p className="text-muted">Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={server} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Shared Hosting</h4>
                                        <p className="text-muted">It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={big} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">VPS Hosting</h4>
                                        <p className="text-muted">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={database} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Reseller Hosting</h4>
                                        <p className="text-muted">Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-5 pt-3">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={refresh} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Web Hosting</h4>
                                        <p className="text-muted">It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.</p>
                                        <Link to="#" className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={shapeLight} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;