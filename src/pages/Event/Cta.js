// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Parallax
import { Parallax } from 'react-parallax';

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
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <Parallax
                    bgImage={require("../../images/event/cta.jpg")}
                    strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}

                 >
                    <section className="section bg-cta"  id="cta">
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">Digital International Conference 2019</h4>
                                    <p className="text-light para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" onClick={this.openModal} className="play-btn mt-2 video-play-icon">
                                        <i className="mdi mdi-play text-white"></i>
                                    </Link>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </section>
                </Parallax>

            </React.Fragment>
        );
    }
}

export default Cta;