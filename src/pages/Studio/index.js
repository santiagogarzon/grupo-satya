// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Import images
import img3 from '../../images/3.jpg';

// import generic component
import Partner  from '../../components/Shared/Partner';
import WorkProcess from './WorkProcess';

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
        window.removeEventListener("scroll", this.scrollNavigation);
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
                <section className="bg-half-170" style={{ background: `url(${img3}) center center` }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="row position-relative align-items-center pt-4">
                                    <Col lg={7} className="offset-lg-5">
                                        <div className="title-heading studio-home bg-white shadow mt-5">
                                            <h1 className="heading mb-3">Present Your Work With <span className="text-primary">Landrick</span> Studio</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4">
                                                <Link to="/page-contact-one" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                                                <Link to="/documentation" className="btn btn-outline-primary mt-2 ml-1">Documentation</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

               {/* partner */}
                <section className="pt-5 pb-5 bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                          <Partner />
                        </Row>
                    </div>
                </section>

                {/* WorkProcess */}
                <WorkProcess />


            </React.Fragment>
        );
    }
}

export default Index;
