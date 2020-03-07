// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import images
import roundLight from "../../images/shapes/round-light.png";
import homeImage from "../../images/app/home.png";

// import generic component
import Feature from './Feature';
import ShowCase from './ShowCase';
import Pricing from './Pricing';
import Testi from './Testi';

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
                <section className="bg-half-170" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={6} md={7} >
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Manage all of you stuff using <span className="text-primary">Landrick.</span> app</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</Link>
                                                <Link to="#" className="btn btn-outline-primary ml-1 mt-2"><i className="mdi mdi-google-play"></i> Play Store</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={homeImage} className="img-fluid mx-auto d-block" alt="" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="container-fluid">
                                <Row>
                                    <div className="home-shape-bottom">
                                        <img src={roundLight} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* ShowCase */}
                <ShowCase />

                {/* Pricing */}
                <Pricing />

                {/* Testi */}
                <Testi />

            </React.Fragment>
        );
    }
}

export default Index;
