// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import Images
import workingWithComputerImg from '../../images/illustrator/working_with_computer.svg';

// Feature Images
import saas2 from '../../images/saas/2.png';
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';

// Import Generic Components
import Feature from '../../components/Shared/Feature';
import Cta from './Cta';
import KeyFeature from './KeyFeature';
import Testi from './Testi';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class IndexAgency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true });
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation);
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
        
        const featureArray = [
            { id: 1, title: "Design & Development", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.", imgUrl: pen },
            { id: 2, title: "Management & Marketing", description: "Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.", imgUrl: video },
            { id: 3, title: "Stratagy & Research", description: "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.", imgUrl: intellectual },
        ];

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

                {/* Home Section */}
                <section className="bg-half-170 border-bottom agency-wrapper" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={7} md={7} className="order-1 order-md-2">
                                        <div className="title-heading mt-4 ml-lg-5">
                                            <h1 className="heading mb-3">We are Startup Creative <span className="text-primary">Landrick</span> Agency</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary">Learn More <i className="mdi mdi-chevron-right"></i></Link>
                                                <Link to="#" onClick={this.openModal} className="video-play-icon watch text-dark mb-2 ml-3"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 ml-1 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={5} className="order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={workingWithComputerImg} className="img-fluid" alt="" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <section className="section">

                    <Feature featureArray = {featureArray} isCenter = {true} />

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={saas2} className="img-fluid" alt="" />
                            </Col>

                            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-3">
                                    <h4 className="title mb-4">Great Product Analytics With Real Problem</h4>
                                    <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* Cta */}
                <Cta />

                {/* KeyFeature */}
                <KeyFeature />

                {/* Testi */}
                <Testi />

            </React.Fragment>
        );
    }
}

export default IndexAgency;
