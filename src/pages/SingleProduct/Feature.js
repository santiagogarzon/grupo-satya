// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import cameraImg from '../../images/icon/camera.svg';
import speedometer from '../../images/icon/speedometer.svg';
import lowBattery from '../../images/icon/low-battery.svg';
import game from '../../images/icon/game.svg';
import cameraSingle from '../../images/single/camera.png';

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
                        <Row>
                            <Col md={3} className="col-6 p-4 text-center">
                                <img src={cameraImg} height="45" alt="" />
                                <h5 className="mt-2">Camera</h5>
                                <p className="text-muted mb-0">48 mp at 60mtr</p>
                            </Col>

                            <Col md={3} className="col-6 p-4 text-center">
                                <img src={speedometer} height="45" alt="" />
                                <h5 className="mt-2">Speed</h5>
                                <p className="text-muted mb-0">50 kph</p>
                            </Col>

                            <Col md={3} className="col-6 p-4 text-center">
                                <img src={lowBattery} height="45" alt="" />
                                <h5 className="mt-2">Battery</h5>
                                <p className="text-muted mb-0">1 hour and 30 min</p>
                            </Col>

                            <Col md={3} className="col-6 p-4 text-center">
                                <img src={game} height="45" alt="" />
                                <h5 className="mt-2">Control</h5>
                                <p className="text-muted mb-0">20 km Range</p>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={cameraSingle} className="img-fluid" alt="" />
                            </Col>

                            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-3">
                                    <h4 className="title mb-4">DJI 48MP Camera</h4>
                                    <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
