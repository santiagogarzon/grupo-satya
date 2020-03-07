// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import bg02 from '../../images/course/bg02.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


class Cta extends Component {

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
                <section className="section bg-cta" style={{ background: `url(${bg02})`, backgroundPosition: "center center" }} id="cta">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">We Bring New Online Courses</h4>
                                    <p className="text-light para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link onClick={this.openModal} to="#" className="play-btn mt-2 video-play-icon">
                                        <i className="mdi mdi-play text-white"></i>
                                    </Link>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
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