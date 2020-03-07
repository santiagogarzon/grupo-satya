// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import bg01 from "../../images/hotel/bg01.jpg";
import bg02 from "../../images/hotel/bg02.jpg";
import bg03 from "../../images/hotel/bg03.jpg";

class News extends Component {

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
                                    <h4 className="title mb-4">Latest News</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={bg01} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Design your apps in your own way</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={bg02} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">How apps is changing the IT world</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={bg03} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Smartest Applications for Business</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
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

export default News;