// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// import images
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import about from '../../images/about.jpg';

import CountUp from 'react-countup';

import Asset190 from '../../images/illustrator/Asset190.svg';
import Asset189 from '../../images/illustrator/Asset189.svg';
import Asset186 from '../../images/illustrator/Asset186.svg';
import Asset187 from '../../images/illustrator/Asset187.svg';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true })
    }
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
                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Beautiful & Creative Interfaces</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
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
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.</p>
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
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.</p>
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
                        </Row>
                    </div>

                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                
                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={5} md={5}>
                                <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link to="#" onClick={this.openModal} className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Startup Business Solution</h4>
                                    <p className="text-muted">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row>
                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-internet-explorer text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cryengine text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Retina Ready</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-bootstrap text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Based On Bootstrap 4</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cube-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Material Design Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-sass text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Built With SASS</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-check-decagram text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-vector-bezier text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Flaticon Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mb-4 pb-2">
                                <div className="key-feature d-flex p-3 rounded shadow bg-white">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-settings-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Easy to customize</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">See everything about your <span className="text-primary">Landrick</span></h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row id="counter">
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset190} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="45000"> <CountUp start={0} end={45000} duration={8} /></span>$</h2>
                                    <h5 className="counter-head text-muted">Investment</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset189} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="9"> <CountUp start={0} end={9} duration={8} /></span>+</h2>
                                    <h5 className="counter-head text-muted">Awards</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset186} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="48002"> <CountUp start={0} end={48002} duration={8} /></span>$</h2>
                                    <h5 className="counter-head text-muted">Profitability</h5>
                                </div>
                            </Col>
                            <Col md={3}  className="col-6 mt-4 pt-2">
                                <div className="counter-box text-center">
                                    <img src={Asset187} height="70" alt="" />
                                    <h2 className="mb-0 mt-3"><span className="counter-value" data-count="11"><CountUp start={0} end={11} duration={8} /></span>%</h2>
                                    <h5 className="counter-head text-muted">Growth</h5>
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