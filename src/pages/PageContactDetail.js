// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import contactDetail from '../images/contact-detail.jpg';
import  Topbar from '../components/Layout/Topbar';

class PageContactDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function() {   document.getElementById("pageLoader").style.display = "none";   }, 1000);
    }

    render() {

        return (
            <React.Fragment>
                 <Topbar />
               
                <section className="vh-100" style={{ background: `url(${contactDetail})`, backgroundPosition : "center center" }}>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={6} md={7} className="offset-lg-6 offset-md-5">
                                        <div className="title-heading mt-5 pt-4">
                                            <h1 className="heading">Let's talk about your portfolio</h1>
                                            <p className="text-muted">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-email-variant text-muted mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Email</h4>
                                                    <Link to="mailto:contact@example.com" className="text-primary h5">contact@example.com</Link>
                                                </div>
                                            </div>

                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-phone text-muted mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Phone</h4>
                                                    <Link to="tel:+152534-468-854" className="text-primary h5">+152 534-468-854</Link>
                                                </div>
                                            </div>

                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-map-marker-outline text-muted mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Location</h4>
                                                    <Link to="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon h5 text-primary">View on Google map</Link>
                                                </div>
                                            </div>
                                            
                                            <ul className="list-unstyled social-icon mb-0 mt-4">
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-linkedin" title="Linkedin"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageContactDetail;
