// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import shapeLight from '../../images/shapes/shape-light.png';

class Price extends Component {

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
                                    <h4 className="main-title mb-4">Our Hosting Rates</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Cloud Hosting</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>2 GB Memory</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>10 Free Optimization</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>24/7 support</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Content Optimization</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates starter-plan shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase text-primary mb-4">Dedicated Hosting</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>4 GB Memory</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>10 Free Optimization</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>24/7 support</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Content Optimization</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">VPS Hosting</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>8 GB Memory</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>10 Free Optimization</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>24/7 support</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Content Optimization</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Shared Hosting</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">79</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>16 GB Memory</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>10 Free Optimization</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>24/7 support</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Content Optimization</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
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

export default Price;