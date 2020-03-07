// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import bg01 from '../../images/single/bg01.jpg';
import single01 from '../../images/single/1.png';

// Import Generic components
import Feature from './Feature';
import Description from './Description';
import Testimonial from './Testimonial';
import Gallery from './Gallery';

// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


class Index extends Component {

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

    
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation);
     }
  
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top > 80)
        {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else
        {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

                {/* Hero Start */}
                <section className="bg-home" style={{ background: `url(${bg01})`, height: "auto", backgroundPosition : "center center" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col md={9} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                        <div className="title-heading margin-top-100">
                                            <h1 className="display-4 font-weight-bold mb-3">DJI Professional Drone Camera</h1>
                                            <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link  onClick={this.openModal} to="#" className="video-play-icon watch text-dark"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                            </div>
                                        </div>
                                        <div className="home-dashboard">
                                            <img src={single01} alt="" className="img-fluid mover" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Description */}
                <Description />

                {/* Testimonial */}
                <Testimonial />

                {/* Gallery */}
                <Gallery />

            </React.Fragment>
        );
    }
}

export default Index;
