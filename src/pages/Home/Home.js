// React basic and bootstrap
import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import ScrollspyNav from './ScrollspyNav';

// Import  Images 
import rocket from '../../images/rocket.svg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-home-half border-bottom home-wrapper position-relative">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="section-title">
                                            <h1 className="logo">Landrick<span className="text-custom">.</span></h1>
                                            <h2 className="font-weight-bold mb-3 d-flex">Built For
                                            &nbsp;
                                            <Typist>
                                            <span className="element text-custom">Saas</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Application</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Enterprise</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Coworking</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Services</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Minimal Portfolio</span>
                                            <Typist.Backspace count={17} delay={400} />
                                            <span className="element text-custom">Cloud Hosting</span>
                                            <Typist.Backspace count={18} delay={400} />
                                            <span className="element text-custom">Event</span>
                                            <Typist.Backspace count={5} delay={400} />
                                            <span className="element text-custom">Marketing</span>
                                            <Typist.Backspace count={11} delay={400} />
                                            <span className="element text-custom">Agency</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Studio</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Hotel</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-custom">Modern Business</span>
                                            <Typist.Backspace count={20} delay={400} />
                                            <span className="element text-custom">Educational Course</span>
                                            <Typist.Backspace count={20} delay={400} />
                                            <span className="element text-custom">Personal Portfolio</span>
                                            <Typist.Backspace count={20} delay={400} />
                                            <span className="element text-custom">Single Product</span>
                                             </Typist>
                                            </h2>
                                            <p className="text-muted mb-0">Start working with <span className="text-custom font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                            <div className="mt-4 pt-2">

                                              <ScrollspyNav
                                                    scrollTargetIds={["demos"]}
                                                    activeNavClass="active"
                                                    scrollDuration="800"
                                                    headerBackground="true">
                                                     <a href="#demos" className="btn btn-custom rounded mouse-down mr-2 mb-2">
                                                        <i className="mdi mdi-camera"></i> View Demos
                                                      </a> 
                                                      <Link to="#" className="btn btn-outline-white rounded mb-2">Buy Now </Link>
                                                  </ScrollspyNav>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <img src={rocket} className="img-fluid mover" alt="" />     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;
