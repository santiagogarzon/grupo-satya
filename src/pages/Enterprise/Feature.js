// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';

//import images
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';
import intellectual from '../../images/icon/intellectual.svg';
import MobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';

class Feature extends Component {

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
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">What We Do ?</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={pen} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Design & Development</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={video} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Management & Marketing</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={intellectual} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Stratagy & Research</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={user} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Easy To Use</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={calendar} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Daily Reports</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features text-center">
                                    <div className="image position-relative d-inline-block">
                                        <img src={sandClock} alt="" />
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Real Time Zone</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts the original used today.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                    <h4 className="title mb-4">Speed up your development <br /> with <span className="text-primary">Landrick.</span></h4>
                                    <p className="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>

                            <Col lg={5} md={6} className="order-1 order-md-2">
                                <div className="p-4 rounded bg-white feature-form shadow ml-lg-5">
                                    <img src={MobileNotificationSVG} alt="" />

                                    <div className="content mt-4 pt-2">
                                    <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                        <form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col lg={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Name : <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <input type="text" className="form-control pl-5" placeholder="Name" name="name" required />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Email : <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-email ml-3 icons"></i>
                                                        <input type="email" className="form-control pl-5" placeholder="Email" name="email" required />
                                                    </div>
                                                </Col>

                                                <Col lg={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Password : <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" className="form-control pl-5" placeholder="Password" required />
                                                    </div>
                                                </Col>

                                                <Col lg={12} className="mt-3 mb-0">
                                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                                </Col>
                                            </Row>
                                        </form>
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

export default Feature;