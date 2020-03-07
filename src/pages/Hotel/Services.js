// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import images
import wifi from "../../images/icon/wifi.svg";
import gameController from "../../images/icon/game-controller.svg";
import weightlifter from "../../images/icon/weightlifter.svg";
import servingDish from "../../images/icon/serving-dish.svg";
import cardiogram from "../../images/icon/cardiogram.svg";
import bed from "../../images/icon/bed.svg";
import shapeLight from "../../images/shapes/shape-light.png";

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
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Best Services for you</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={wifi} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Free WIFI</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={gameController} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Relaxation</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={weightlifter} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Spa & Fitness</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={servingDish} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Restaurant</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={cardiogram} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Smooth Parallax</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={bed} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Bedrooms</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
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