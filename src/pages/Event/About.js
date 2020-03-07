// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import roundLight from "../../images/shapes/round-light.png";
import about from '../../images/event/about.jpg';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section border-top">
                    <div className="container">
                        <div className="bg-light rounded">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <img src={about} className="rounded img-fluid" alt="" />
                                </Col>

                                <Col lg={6}>
                                    <div className="section-title p-5">
                                        <h4 className="title mb-4">Business Startup Conference</h4>
                                        <p className="text-muted para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page managing conversion centered bootstrap4 html page.</p>
                                        <div className="mt-4 pt-2">
                                            <Link to="#" className="btn btn-outline-primary">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
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

export default About;