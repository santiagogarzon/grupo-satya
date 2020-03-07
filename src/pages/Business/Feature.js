// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import images
import arrowBottom from '../../images/shapes/arrow-bottom.png';
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';

class Feature extends Component {

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
                                    <h4 className="main-title mb-4">What We Do ?</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="col-12">
                                <div className="features mt-5">
                                    <div className="image position-relative d-inline-block">
                                        <img src={pen} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Design & Development</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={video} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Management & Marketing</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={intellectual} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Stratagy & Research</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={user} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Easy To Use</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={calendar} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Daily Reports</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={sandClock} alt="Landrick" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Real Time Zone</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts the original used today.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-arrow">
                                <img src={arrowBottom} alt="Landrick" className="img-fluid mx-auto d-block" />
                                <a href="#cta" className="mouse-down"><i className="mdi mdi-chevron-double-down arrow-icon mover text-dark h5"></i></a>
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;