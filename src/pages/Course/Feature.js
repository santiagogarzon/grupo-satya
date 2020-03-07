// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import insurance from "../../images/icon/insurance.svg";
import graduationHat from "../../images/icon/graduation-hat.svg";
import ai from "../../images/icon/ai.svg";

class Feature extends Component {

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
                        <Row>
                            <Col md={4}>
                                <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5">
                                    <div className="icon">
                                        <img src={insurance} height="55" alt="" />
                                    </div>
                                    <h4 className="mt-3"><Link to="#" className="title text-dark"> Unlimited Access</Link></h4>
                                    <p className="text-muted">It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout. </p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <img src={insurance} className="full-img" height="300" alt="" />
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5">
                                    <div className="icon">
                                        <img src={graduationHat} height="55" alt="" />
                                    </div>
                                    <h4 className="mt-3"><Link to="#" className="title text-dark"> Our Courses</Link></h4>
                                    <p className="text-muted">It is a long established fact that a reader will be of a page when reader will be of a page looking at its layout. </p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <img src={graduationHat} className="full-img" height="300" alt="" />
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded mb-0 p-4 pt-5 pb-5">
                                    <div className="icon">
                                        <img src={ai} height="55" alt="" />
                                    </div>
                                    <h4 className="mt-3"><Link to="#" className="title text-dark"> Expert Teachers</Link></h4>
                                    <p className="text-muted">It is a long established fact that a reader will be of a page when reader will be of a page looking at its layout. </p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <img src={ai} className="full-img" height="300" alt="" />
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