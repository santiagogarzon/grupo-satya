// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import drone from '../../images/single/drone.gif';
import bg02 from '../../images/single/bg02.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }


    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row>
                            <Col className="text-center">
                                <img src={drone} className="img-fluid" alt="" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Awesome Features</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-camera-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">48mp Camera</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-wifi text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Faster Connection</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cryengine text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Easy to Operate</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-video-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Stable Video</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-antenna text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Powerful Antenna</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-battery-10 text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Battery Backup</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-memory text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Advance Technology</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-fan text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Easy Disassembly</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-android-studio text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Rebust Structure</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col md={7}>
                                <div className="position-relative">
                                    <img src={bg02} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link  onClick={this.openModal} to="#" className="play-btn shadow video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                        
            </React.Fragment>
        );
    }
}

export default Description;
