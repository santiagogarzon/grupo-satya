// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import img2 from '../../images/2.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


class Cta extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-cta" style={{ background: `url(${img2})`, backgroundPosition : "center center", height : "auto" }} id="cta">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">Stop leaving money on the table.</h4>
                                    <p className="text-light para-desc mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link  onClick={this.openModal} to="#" className="play-btn mt-2 video-play-icon">
                                        <i className="mdi mdi-play text-white"></i>
                                    </Link>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           
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