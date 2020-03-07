// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import personal01 from '../../images/personal/1.jpg';
import personal02 from '../../images/personal/2.jpg';
import personal03 from '../../images/personal/3.jpg';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col>
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Latest News</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={personal01} className="img-fluid rounded-top" alt="" />
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
                                        <img src={personal02} className="img-fluid rounded-top" alt="" />
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
                                        <img src={personal03} className="img-fluid rounded-top" alt="" />
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
                            <Col className="mt-4 pt-2">
                                <Link to="page-blog" className="btn btn-primary ">See More <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60" id="contact">
                        <Row className="justify-content-center">
                            <Col>
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Contact Me</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="pt-5 pb-5 p-4 bg-white rounded shadow">
                                    <h4>Get In Touch !</h4>
                                    <div className="custom-form mt-4">
                                        <div id="message"></div>
                                        <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                        <form method="post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                            <Row>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Your Name <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Your Email <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-email ml-3 icons"></i>
                                                        <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required />
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Comments</label>
                                                        <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                        <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col sm={12} className="text-center">
                                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={8} md={6} className="pl-md-3 pr-md-3 mt-4 pt-2">
                                <div className="map map-height-two rounded map-gray">
                                    <iframe title="Landrick" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border : 0 }} className="rounded" allowFullScreen=""></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;