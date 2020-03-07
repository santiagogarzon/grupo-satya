// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//import images
import cta from '../../images/coworking/cta.jpg';
import lightbulb from '../../images/icon/lightbulb.svg';
import tableImg from '../../images/icon/table.svg';
import star from '../../images/icon/star.svg';
import startUp from '../../images/icon/start-up.svg';

class Cta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <div className="bg-light rounded">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <img src={cta} className="rounded img-fluid" alt="" />
                                </Col>

                                <Col lg={6} className="text-center">
                                    <div className="section-title p-5">
                                        <Link  onClick={this.openModal}  to="#" className="play-btn mt-0 border text-center video-play-icon">
                                            <i className="mdi mdi-play text-dark"></i>
                                        </Link>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                                           
                                        <h4 className="main-title mb-4 mt-4">We Are Creative Dreamers and Co-workers</h4>
                                        <p className="text-muted mx-auto para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Choose The Pricing Plan</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col md={3} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <img src={lightbulb} className="mb-4" height="50" alt="" />
                                    <h2 className="title text-uppercase mb-4">Member</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">19</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" className="btn btn-outline-primary btn-sm mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col md={3} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                                    <div className="lable text-center bg-primary pt-2 pb-2">
                                        <h6 className="best text-white mb-0 text-uppercase">Best</h6>
                                    </div>
                                    <img src={tableImg} className="mb-4" height="50" alt="" />
                                    <h2 className="title text-uppercase mb-4">Desk</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" className="btn btn-outline-primary btn-sm mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col md={3} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <img src={star} className="mb-4" height="50" alt="" />
                                    <h2 className="title text-uppercase mb-4">Dedicated</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">49</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" className="btn btn-outline-primary btn-sm mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col md={3} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <img src={startUp} className="mb-4" height="50" alt="" />
                                    <h2 className="title text-uppercase mb-4">Office</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <p className="text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" className="btn btn-outline-primary btn-sm mt-4">Try It Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Cta;