// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import course1 from '../../images/course/1.jpg';
import course2 from '../../images/course/2.jpg';
import course3 from '../../images/course/3.jpg';
import course4 from '../../images/course/4.jpg';
import course5 from '../../images/course/5.jpg';
import course6 from '../../images/course/6.jpg';
import course7 from '../../images/course/7.jpg';
import course9 from '../../images/course/9.jpg';

import team01 from '../../images/team/1.jpg';
import team02 from '../../images/team/2.jpg';
import team03 from '../../images/team/3.jpg';
import team04 from '../../images/team/4.jpg';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="courses">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Explore Popular Courses</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc position-relative overflow-hidden rounded border">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course1} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Program for Missionaries</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>75</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course2} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Access to Higher Education</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star-outline h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">3.99 Star (11<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>150</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course3} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Course in TEFL Teacher Training</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star-half h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">4.7 Star (9<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>130</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course4} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Educational Communication</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>85</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course5} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Introduction to Epidemiology</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>100</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course6} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Good Clinical Practice</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star-outline h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">4 Star (2<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>109</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course7} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Advanced Diagnostic Research</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star-half h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">4.5 Star (8<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>155</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course7} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                       <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Skills Development Facilitation</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>135</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mt-4 pt-2">
                                <div className="courses-desc rounded border position-relative overflow-hidden">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course9} className="img-fluid rounded-top mx-auto" alt="Landrick" />
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">PGCE Primary</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>55</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col className="mt-4 pt-2 text-center">
                                <Link to="#" className="btn btn-primary">See More Courses <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60" id="instructors">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Instructors</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team01} className="img-fluid d-block rounded-pill mx-auto" alt="Landrick" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Ronny Jofra</Link></h5>
                                        <small className="designation text-muted">Web Developers</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team02} className="img-fluid d-block rounded-pill mx-auto" alt="Landrick" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Micheal Carlo</Link></h5>
                                        <small className="designation text-muted">Designer</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team03} className="img-fluid d-block rounded-pill mx-auto" alt="Landrick" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Aliana Rosy</Link></h5>
                                        <small className="designation text-muted">UX / UI Designer</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team04} className="img-fluid d-block rounded-pill mx-auto" alt="Landrick" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Sofia Razaq</Link></h5>
                                        <small className="designation text-muted">Ios Developer</small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;