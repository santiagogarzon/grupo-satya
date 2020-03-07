// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// Import images
import saas1 from '../../images/saas/1.png';
import curveWhite from '../../images/shapes/curve-white.png';
import appDevelopmentSVG from '../../images/illustrator/app_development_SVG.svg';

class Start extends Component {

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
                            <Col lg={6} md={6}>
                                <img src={saas1} className="img-fluid shadow" alt="" />
                            </Col>

                            <Col lg={6} md={6}  className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-3">
                                    <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                                    <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                    <h4 className="title mb-4">Get Notified About Importent Email</h4>
                                    <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>

                            <Col lg={5} md={6} className="order-1 order-md-2">
                                <img src={appDevelopmentSVG} alt="" />
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={curveWhite} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Start;
