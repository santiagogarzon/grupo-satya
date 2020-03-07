// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import startupSVG from '../../images/illustrator/Startup_SVG.svg';

// Import Generic Components
import Partner from '../../components/Shared/Partner';
import HowItWorks from '../../components/Shared/HowItWorks';
import Testi from '../../components/Shared/Testi';
import Pricing from '../../components/Shared/Pricing';
import Faq from '../../components/Shared/Faq';

class IndexMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.scrollNavigation = this.scrollNavigation.bind(this);
      
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
              {/* Home Section */}
                <section className="bg-half-170" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={7} md={7}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Our Creativity Is Your <span className="text-primary">Success</span> </h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="page-contact-one" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                                                <Link to="documentation" className="btn btn-outline-primary mt-2 ml-1">Documentation</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={startupSVG} alt="" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner */}
                <section className="pt-5 pb-5 border-bottom border-top">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Partner />
                        </Row>
                    </div>
                </section>

                {/* HowItWorks */}
                <HowItWorks />

                {/* Testi */}
                <Testi />

                {/* Pricing */}
                <Pricing />

                {/* Faq */}
                <Faq />

            </React.Fragment>
        );
    }
}

export default IndexMain;
