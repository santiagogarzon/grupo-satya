// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import images
import marketingShape from '../../images/marketing/marketing-shape.png';
import marketing from '../../images/marketing/marketing.png';

// import generic component
import Feature  from './Feature';
import Faqs  from './Faqs';
import Partners from '../../components/Shared/Partner';

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
                <section className="bg-marketing" style={{ background: `url(${marketingShape})` }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center mt-5">
                                    <Col lg={7} md={7} className="text-center">
                                        <img src={marketing} className="img-fluid" style={{ maxHeight: "400px" }} alt="" />
                                        <div className="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h1 className="heading mb-3">Social Media Marketing is the Best Ever</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="page-contact-one" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                                                <Link to="#" className="btn btn-outline-primary mt-2 ml-1">Contact us</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* partners */}
                <section className="pt-5 pb-5 border-bottom border-top">
                    <div className="container">
                        <Row className="justify-content-center">
                         <Partners />
                        </Row>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Faqs */}
                <Faqs />

            </React.Fragment>
        );
    }
}

export default Index;
