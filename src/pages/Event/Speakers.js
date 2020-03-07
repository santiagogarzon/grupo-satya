// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import team1 from "../../images/team/1.jpg";
import team2 from "../../images/team/2.jpg";
import team3 from "../../images/team/3.jpg";
import team4 from "../../images/team/4.jpg";

import roundWhite from '../../images/shapes/round-white.png';

// Partners
import Partner from '../../components/Shared/Partner';

class Speakers extends Component {

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
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Our Speakers</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center rounded bg-white pt-3">
                                    <div className="position-relative">
                                        <img src={team1} className="img-fluid d-block rounded-pill mx-auto shadow" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Ronny Jofra</Link></h5>
                                        <small className="designation text-muted">Organizer</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center rounded bg-white pt-3">
                                    <div className="position-relative">
                                        <img src={team2} className="img-fluid d-block rounded-pill mx-auto shadow" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Micheal Carlo</Link></h5>
                                        <small className="designation text-muted">Event Manager</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center rounded bg-white pt-3">
                                    <div className="position-relative">
                                        <img src={team3} className="img-fluid d-block rounded-pill mx-auto shadow" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Aliana Rosy</Link></h5>
                                        <small className="designation text-muted">Motivator</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center rounded bg-white pt-3">
                                    <div className="position-relative">
                                        <img src={team4} className="img-fluid d-block rounded-pill mx-auto shadow" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Sofia Razaq</Link></h5>
                                        <small className="designation text-muted">Speaker</small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-50">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Event Sponsors</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="row justify-content-center">
                            <Partner />
                        </div>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={roundWhite} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Speakers;