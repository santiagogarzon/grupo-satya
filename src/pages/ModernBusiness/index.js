// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert  } from 'reactstrap';

// Import Generic components
import Partner from '../../components/Shared/Partner';
import Feature from './Feature';
import Cta from './Cta';
import Price from './Price';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//Import Images
import modern01 from '../../images/modern01.jpg';
import roundWhite from '../../images/shapes/round-white.png';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            Contactvisible : false
        }
        this.openModal = this.openModal.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    openModal() {
        this.setState({ isOpen: true })
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
                <section className="bg-half-170" style={{ background: `url(${modern01})`, backgroundPosition : "center center" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center mt-md-5">
                                    <Col lg={4} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                                        <div className="login_page bg-white shadow rounded p-4">
                                            <h5 className="mb-4">Register Now</h5>
                                            <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                           Registration Done Successfully.
                                         </Alert>
                                            <form onSubmit={this.handleSubmit} className="login-form">
                                                <Row>
                                                    <Col md={12}>
                                                        <div className="form-group position-relative">
                                                            <label>First name <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="text" className="form-control pl-5" placeholder="First Name" name="s" required />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Your Email <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-email ml-3 icons"></i>
                                                            <input type="email" className="form-control pl-5" placeholder="Email" name="email" required />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Password <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <input type="password" className="form-control pl-5" placeholder="Password" required />
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md={12}>
                                                        <button className="btn btn-success w-100">Register</button>
                                                    </Col>
                                                    <Col lg={12} className="mt-4 text-center">
                                                        <h6>Or Signup With</h6>
                                                        <ul className="list-unstyled social-icon mb-0 mt-3">
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </Col>

                                    <Col lg={7} md={6} className="offset-lg-1 order-1 order-md-2">
                                        <div className="title-heading mt-4">
                                            <h1 className="heading text-white mb-3">Powerful Solution For Your Startup Business </h1>
                                            <p className="para-desc text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="#"  className="btn btn-primary mb-2 mr-2">Get Started</Link>
                                                <Link  to="#" onClick={this.openModal} className="video-play-icon watch text-light ml-1 mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
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

                {/* Partner */}
                <section className="pt-5 pb-5 border-bottom">
                    <div className="container">
                        <Row className="justify-content-center">
                             <Partner />
                        </Row>
                    </div>
                </section>

                {/* Feature */}
                <Feature />

                {/* Cta */}
                <Cta />

                {/* Price */}
                <Price />

            </React.Fragment>
        );
    }
}

export default Index;
