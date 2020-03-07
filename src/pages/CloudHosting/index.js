// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import bg1 from '../../images/hosting/bg1.png';
import shapeLight from '../../images/shapes/shape-light.png';

// Import Generic components
import Search from './Search';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Price from './Price';
import Testi from './Testi';

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
                <section className="bg-home" style={{ background: `url(${bg1}) center center` }} id="home">
                    <div className="bg-overlay bg-overlay-dark"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="margin-top-100 justify-content-center">
                                    <Col lg={12}>
                                        <div className="title-heading text-center mt-5 position-relative" style={{ zIndex: 1 }}>
                                            <h1 className="heading text-white mb-3">Cloud Services & Web Hosting Solution</h1>
                                            <p className="para-desc mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-success">Get Started</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="container-fluid">
                                <Row>
                                    <div className="home-shape-bottom">
                                        <img src={shapeLight} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search */}
                <Search />

                {/* Services */}
                <Services />

                {/* HowItWorks */}
                <HowItWorks />

                {/* Price */}
                <Price />
                
                {/* Testi */}
                <Testi />

            </React.Fragment>
        );
    }
}

export default Index;
