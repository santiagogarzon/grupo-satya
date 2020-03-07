// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

import ScrollspyNav from './ScrollspyNav';

import bg01 from '../../images/personal/bg01.jpg';

// Import Generic components
import About from './About';
import Testi from './Testi';
import Blog from './Blog';
import Partner from '../../components/Shared/Partner';

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
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* Hero Start */}
                <section className="bg-home" style={{ background: `url(${bg01})`, backgroundPosition : "center" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={8} md={9} >
                                        <div className="title-heading mt-4">
                                            <h1 className="display-3 font-weight-bold mb-3">Here I'm <br />
                                                <Typist>
                                                    <span className="element">Calvin Carlo</span>
                                                    <Typist.Backspace count={15} delay={200} />
                                                    <span className="element">UI/UX Designer</span>
                                                    <Typist.Backspace count={15} delay={200} />
                                                    <span className="element">Web Developer</span>
                                                </Typist>
                                            </h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <ScrollspyNav
                                                    scrollTargetIds={["portfolio","contact"]}
                                                    activeNavClass="active"
                                                    scrollDuration="800"
                                                    headerBackground="true"
                                                   >
                                                     <a href="#portfolio" className="btn btn-primary mt-2 mr-2 mouse-down">
                                                        <i className="mdi mdi-camera"></i> View Portfolio
                                                      </a> 
                                                      <a href="#contact" className="btn btn-outline-primary mt-2 mouse-down">
                                                          <i className="mdi mdi-cloud-download"></i> Hire Me
                                                      </a>
                                                  </ScrollspyNav>
                                                </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />

                {/* Testi */}
                <Testi />

                {/* Partner */}
                <section className="pt-5 pb-5 border-bottom border-top">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Partner />
                        </Row>
                    </div>
                </section>

                {/* Blog */}
                <Blog />


            </React.Fragment>
        );
    }
}

export default Index;
