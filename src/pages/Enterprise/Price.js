// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import blog01 from '../../images/blog/01.jpg';
import blog02 from '../../images/blog/02.jpg';
import blog03 from '../../images/blog/03.jpg';
import roundDark from '../../images/shapes/round-dark.png';

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
                                    <h4 className="title mb-4">Charge your creative inspiration</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Free</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-white p-4 rounded">
                                    <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Appointments</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Professional</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Try It Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Ultimate</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">79</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Installment</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Started Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
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
                                        <img src={blog01} className="img-fluid rounded-top" alt="" />
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
                                        <img src={blog02} className="img-fluid rounded-top" alt="" />
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
                                        <img src={blog03} className="img-fluid rounded-top" alt="" />
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

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Schedule a demo with us</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10} >
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required="" aria-describedby="newssubscribebtn" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary submitBnt" type="button" id="newssubscribebtn">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={roundDark} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Price;