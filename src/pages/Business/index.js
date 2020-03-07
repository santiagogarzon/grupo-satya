// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

// Import images
import busi01 from '../../images/busi01.jpg';

// import generic component
import Feature  from './Feature';
import Cta from './Cta';
import Pricing from './Pricing';
import News from './News';

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
          } else {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {

        return (
            <React.Fragment>
                
    
               {/* Hero Start */}
                <section className="bg-half-170 border-bottom" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={6} md={7}>
                                        <div className="title-heading mt-4">
                                            <div className="alert alert-light rounded-pill d-inline-block" role="alert"> <span className="badge rounded badge-secondary mr-2">Simple</span> Build <span className="text-success">anything</span> you want - Landrick</div>
                                            <h1 className="heading mt-3 mb-3">Leading Digital Business For &nbsp;
                                            <Typist style={{ display : "contents" }}>
                                            <span className="element text-primary">Agency</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Software</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Technology</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Studio</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Webapps</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Agency</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Software</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Technology</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Studio</span>
                                            <Typist.Backspace count={15} delay={200} />
                                            <span className="element text-primary">Webapps</span>
                                            <Typist.Backspace count={15} delay={200} />
                                             </Typist>&nbsp;
                                            Solution</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4">
                                                <Link to="#" className="btn btn-outline-primary rounded">Make Your Shop</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <div className="position-relative">
                                            <img src={busi01} className="rounded img-fluid mx-auto d-block" alt="" />
                                            <div className="play-icon">
                                                <Link to="//vimeo.com/287684225" className="play-btn video-play-icon">
                                                    <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Cta */}
                <Cta />

                {/* Pricing */}
                <Pricing />

                {/* News */}
                <News />

            </React.Fragment>
        );
    }
}

export default Index;
