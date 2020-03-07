// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import Generic components
import Work from './Work';

import portfolio from '../../images/work/bg-portfolio.jpg';
import roundWhite from '../../images/shapes/round-white.png';

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
                <section className="bg-half-260" style={{ background: `url(${portfolio})`, backgroundPosition:"center" }}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col>
                                        <div className="title-heading text-center mt-5 pt-4">
                                            <h1 className="display-1 font-weight-bold mb-3">Minimal Portfolio</h1>
                                            <p className="para-desc mx-auto h6">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
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

                {/* Work  */}
                <Work/>
                
            </React.Fragment>
        );
    }
}

export default Index;
