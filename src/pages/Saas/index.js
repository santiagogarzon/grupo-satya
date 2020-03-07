// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import images
import homeShape from '../../images/saas/home-shape.png';
import homeImg from '../../images/saas/home.png';

// Import images
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';
import curveLight from '../../images/shapes/curve-light.png';

// Import Generic Components
import Partner from '../../components/Shared/Partner';
import Feature from '../../components/Shared/Feature';
import Start from './Start';
import Client from './Client';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    componentDidMount() {
        document.body.classList = "";
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

        const featureArray = [
            { id: 1, title: "Easy To Use", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper. ", imgUrl: user },
            { id: 2, title: "Daily Reports", description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.", imgUrl: calendar },
            { id: 3, title: "Real Time Zone", description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.", imgUrl: sandClock },
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

                <section className="bg-home" style={{ background: `url(${homeShape})`, backgroundPosition : "center center", height : "auto" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col md={9} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                        <div className="title-heading margin-top-100">
                                            <h1 className="heading mb-3">Conduct More Customer In A Better Way</h1>
                                            <p className="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#about" className="btn btn-primary">Start Free Trial <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="home-dashboard">
                                            <img src={homeImg} alt="" className="img-fluid" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner */}
                <section className="section border-bottom pt-sm-60">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Our Trusted Clients</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="row justify-content-center">
                            <Partner />
                        </div>
                    </div>
                </section>


                {/* Feature */}
                <section className="section">
                    <div className="container">
                        <Feature featureArray={featureArray} isCenter={false} />
                    </div>

                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={curveLight} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>

                {/* Start */}
                <Start />

                {/* Client */}
                <Client />


            </React.Fragment>
        );
    }
}

export default Index;
