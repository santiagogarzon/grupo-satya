// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import CountUp from 'react-countup';

// Import images
import laptop from '../../images/laptop.png';

class Counter extends Component {

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
                            <Row className="align-items-center">
                                <Col md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="section-title mr-lg-5">
                                        <h4 className="title mb-4">Get Notified About Importent Email</h4>
                                        <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                        <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </Col>

                                <Col md={6} className="order-1 order-md-2">
                                    <img src={laptop} className="img-fluid" alt="" />
                                </Col>
                            </Row>
                        </div>

                        <div className="container mt-100 mt-60">
                            <Row className="justify-content-center" id="counter">
                                <Col md={4} className="mt-4 pt-2">
                                    <div className="counter-box text-center px-lg-4">
                                        <h2 className="mb-0 text-primary display-4"><span className="counter-value" data-count="97">
                                            <CountUp start={0} end={97} duration={8} />
                                        </span>%</h2>
                                        <h5 className="counter-head">Happy Client</h5>
                                        <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    </div>
                                </Col>

                                <Col md={4} className="mt-4 pt-2">
                                    <div className="counter-box text-center px-lg-4">
                                        <h2 className="mb-0 text-primary display-4"><span className="counter-value" data-count="15">
                                        <CountUp start={0} end={15} duration={8} /></span>+</h2>
                                        <h5 className="counter-head">Awards</h5>
                                        <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    </div>
                                </Col>

                                <Col md={4} className="mt-4 pt-2">
                                    <div className="counter-box text-center px-lg-4">
                                        <h2 className="mb-0 text-primary display-4"><span className="counter-value" data-count="98">
                                        <CountUp start={0} end={98} duration={8} /></span>%</h2>
                                        <h5 className="counter-head">Project Complete</h5>
                                        <p className="text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
            </React.Fragment>
        );
    }
}

export default Counter;
