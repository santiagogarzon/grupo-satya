// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

//react bootstarp
import { Carousel } from 'react-bootstrap';

// Import Css
import './animate.css';
import './animations-delay.css';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// import images
import bg01 from '../../images/coworking/bg01.jpg';
import bg02 from '../../images/coworking/bg02.jpg';
import bg03 from '../../images/coworking/bg03.jpg';

// Import Generic components
import Partner from '../../components/Shared/Partner';
import About from './About';
import Service from './Service';
import Cta from './Cta';
import ClientBlog from './ClientBlog';
import ContactForm from './ContactForm';

class Index extends Component {

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

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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
                
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                
                <section className="home-slider position-relative">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <Carousel indicators={false}>
                                <Carousel.Item style={{ backgroundImage: `url(${bg01})` }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col lg={12} className="text-center">
                                                        <div className="title-heading mt-4">
                                                            <h6 className="text-light animated fadeInDownBig animation-delay-1">Private office and Co-working space for <span className="text-success">$19</span></h6>
                                                            <h1 className="heading mb-3 text-white animated fadeInUpBig animation-delay-3">Coworking  Space For a Success</h1>
                                                            <p className="para-desc text-light mx-auto animated fadeInUpBig animation-delay-7">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                                                                <Link to="#" className="btn btn-primary mt-2">Get Started</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundImage: `url(${bg02})` }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col lg={12} className="text-center">
                                                        <div className="title-heading mt-4">
                                                            <h6 className="text-light animated fadeInDownBig animation-delay-1">The Best Coworking in The City</h6>
                                                            <h1 className="heading mb-3 text-white animated fadeInUpBig animation-delay-3">Office Space in Vietnam</h1>
                                                            <p className="para-desc mx-auto text-light animated fadeInUpBig animation-delay-7">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                                                                <form>
                                                                    <div className="form-group">
                                                                        <input type="email" id="email" name="email" className=" rounded" placeholder="E-mail" />
                                                                        <button type="submit" className="btn btn-primary">Book Space</button>
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                                            <label className="custom-control-label text-white">I Accept
                                                                           <Link to="#" className="text-success">Terms And Condition</Link></label>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item style={{ backgroundImage: `url(${bg03})` }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="justify-content-center">
                                                    <Col lg={12} className="text-center">
                                                        <div className="title-heading mt-4">
                                                            <h6 className="text-light animated fadeInDownBig animation-delay-1">Our Space for You</h6>
                                                            <h1 className="heading mb-3 text-white animated fadeInUpBig animation-delay-3">Own Your Office For A Day</h1>
                                                            <p className="para-desc mx-auto text-light animated fadeInUpBig animation-delay-7">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="watch-video mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                                                                <Link to="#" onClick={this.openModal} className="video-play-icon watch text-white mb-2 ml-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                              </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* Partners */}
                <section className="pt-5 pb-5 border-bottom">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <h5>Trusted client by over 10,000+ of the world’s</h5>
                            </Col>
                        </Row>

                        <Row className="mt-5 justify-content-center">
                            <Partner />
                        </Row>
                    </div>
                </section>

                {/* About */}
                <About />

                {/* Service */}
                <Service />
                {/* Cta */}
                <Cta />
                {/* ClientBlog */}
                <ClientBlog />

                {/* ContactForm */}
                <ContactForm />

            </React.Fragment>
        );
    }
}

export default Index;
