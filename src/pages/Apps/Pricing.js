// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Pricing extends Component {

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
                                    <h4 className="main-title mb-4">Choose The Pricing Plan</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col md={4}>
                                <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Free</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="pricing-rates starter-plan shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Appointments</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Professional</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Try It Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Pricing;
