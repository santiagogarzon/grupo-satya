// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import Generic components
import About from './About';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Cta from './Cta';
import Price from './Price';
import News from './News';

// import images
import event from '../../images/event/event.jpg';

//CountDown
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return <React.Fragment>
            <div className="count-down">
                <span className="count-number">351</span>
                <span className="count-head position-relative d-block">Days</span></div>
            <div className="count-down">
                <span className="count-number">{hours}</span>
                <span className="count-head position-relative d-block">Hours</span>
            </div> <div className="count-down">
                <span className="count-number">{minutes}</span>
                <span className="count-head position-relative d-block">Minutes</span>
            </div> <div className="count-down">
                <span className="count-number">{seconds}</span>
                <span className="count-head position-relative d-block">Seconds</span>
            </div>
        </React.Fragment>
    }
};


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
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

           

                {/* Hero Start */}
                <section className="bg-home" style={{ background: `url(${event})`, backgroundPosition : "center center" }} >
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={10} className="text-center">
                                        <div className="title-heading">
                                            <h4 className="text-success mb-3">11th October, 2020</h4>
                                            <h1 className="display-4 text-white font-weight-bold mb-3">Digital Conference 2020-21</h1>
                                            <p className="para-desc mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>

                                            <Row>
                                                <Col md={12} className="text-center">
                                                    <div id="eventdown">
                                                    <Countdown
                                                date={Date.now() + 1199658655000}
                                                renderer={renderer}
                                            />
                                              </div>
                                                </Col>
                                            </Row>

                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-success mt-2 mr-2"><i className="mdi mdi-ticket"></i> Buy Tickets</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="container-fluid">
                                <Row>
                                    <div className="home-shape-bottom">
                                        <div className="text-center bg-white p-4">
                                            <h5 className="text-dark mb-0">Next Event : 15th March, 2021</h5>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />

                {/* Speakers */}
                <Speakers />

                {/* Schedule */}
                <Schedule />

                {/* Cta */}
                <Cta />

                {/* Price */}
                <Price />

                {/* News */}
                <News />

            </React.Fragment>
        );
    }
}

export default Index;
