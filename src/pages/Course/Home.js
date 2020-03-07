// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// import images
import bg01 from '../../images/course/bg01.jpg';
import bg04 from '../../images/course/bg04.jpg';
import bg05 from '../../images/course/bg05.jpg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        }
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        // console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    render() {
        return (
            <React.Fragment>
                 <section className="main-slider">
                    <ul className="slides">

                        <RBCarousel
                            version={4}
                            autoplay={this.state.autoplay}
                            pauseOnVisibility={true}
                            onSelect={this.visiableOnSelect}
                            indicators={false}
                            slideshowSpeed={3000} >

                            <div className="item">
                                <li className="bg-slider" style={{ background: `url(${bg01})`, backgroundPosition : "center center" }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col className="text-center">
                                                        <div className="title-heading text-white mt-4">
                                                            <h1 className="display-4 font-weight-bold mb-3">You Can Learn Anything With Us</h1>
                                                            <p className="para-desc mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="mt-4">
                                                                <Link to="#courses" className="btn btn-primary mt-2 mr-2 mouse-down"><i className="mdi mdi-book-open-variant"></i> Find Courses</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="item">
                                <li className="bg-slider" style={{ background: `url(${bg04})`, backgroundPosition : "center center"  }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col className="text-center">
                                                        <div className="title-heading text-white mt-4">
                                                            <h1 className="display-4 font-weight-bold mb-3">Better Education For A Better Future </h1>
                                                            <p className="para-desc mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="mt-4">
                                                                <Link to="#admission" className="btn btn-primary mt-2 mr-2 mouse-down"><i className="mdi mdi-school"></i> Admission Now</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="item">
                                <li className="bg-slider" style={{ background: `url(${bg05})`, backgroundPosition : "center center"  }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col className="text-center">
                                                        <div className="title-heading text-white mt-4">
                                                            <h1 className="display-4 font-weight-bold mb-3">Education Is The Key of Success</h1>
                                                            <p className="para-desc mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="mt-4">
                                                                <Link to="#instructors" className="btn btn-primary mt-2 mr-2 mouse-down"><i className="mdi mdi-account"></i> Instructors</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </RBCarousel>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;