// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import img1 from '../../images/work/1.jpg';
import img2 from '../../images/work/2.jpg';
import img3 from '../../images/work/3.jpg';
import img4 from '../../images/work/4.jpg';
import img5 from '../../images/work/5.jpg';
import img6 from '../../images/work/6.jpg';

class WorkProcess extends Component {

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
                                    <h4 className="main-title mb-4">Work Process</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="mt-4 pt-2" >
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Discuss The Project</h4>
                                    <p className="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    <Link to="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step-icon float-right"><i className="mdi mdi-chevron-double-right"></i></li>
                                        <li className="step font-weight-bold">Step 01.</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 pt-2" >
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Develop & Elaborate</h4>
                                    <p className="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    <Link to="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step-icon float-right"><i className="mdi mdi-chevron-double-right"></i></li>
                                        <li className="step font-weight-bold">Step 02.</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 pt-2" >
                                <div className="work-process p-lg-4 p-3 rounded shadow">
                                    <h4 className="title">Final Approvement</h4>
                                    <p className="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    <Link to="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step-icon float-right"><i className="mdi mdi-check-all"></i></li>
                                        <li className="step font-weight-bold">Step 03.</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 pt-50">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Our Latest Projects</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img1} className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img2}  className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img3}  className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img4}  className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img5}  className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Dancing With Myself</Link>
                                            <small className="text-light">Photography</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={img6}  className="img-fluid rounded"  alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">New trends in SEO</Link>
                                            <small className="text-light">Business</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className="text-center mt-4 pt-2">
                                <Link to="page-work" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your workplace</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Buy Now</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
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

export default WorkProcess;