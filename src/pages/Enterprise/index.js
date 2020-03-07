// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

//import images
import enterprise from '../../images/enterprise-bg.jpg';
import roundWhite from '../../images/shapes/round-white.png';

// import generic componenets
import Feature from './Feature';
import Testi from './Testi';
import Price from './Price';
// import Work from './Work';

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

                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

                {/* Hero Start */}
                <section className="bg-half-260" style={{ background: `url(${enterprise})` }}>
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row>
                                    <Col>
                                        <div className="title-heading text-center mt-4">
                                            <h1 className="display-4 text-white mb-3">Starting in Strong Way</h1>
                                            <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-light">Get Started</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="container-fluid">
                                <Row>
                                    <div className="home-shape-bottom">
                                        <img src={roundWhite} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Testi */}
                <Testi />

                {/* Price */}
                <Price />

            </React.Fragment>
        );
    }
}

export default Index;
