// React basic and bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import images
import index from '../../images/demo/index.jpg';
import saas from '../../images/demo/saas.jpg';
import agency from '../../images/demo/agency.jpg';
import apps from '../../images/demo/apps.jpg';
import studio from '../../images/demo/studio.jpg';
import business from '../../images/demo/business.jpg';
import marketing from '../../images/demo/marketing.jpg';
import hotel from '../../images/demo/hotel.jpg';
import modernBusiness from '../../images/demo/modern-business.jpg';
import coworking from '../../images/demo/coworking.jpg';
import hosting from '../../images/demo/hosting.jpg';
import event from '../../images/demo/event.jpg';
import course from '../../images/demo/course.jpg';
import personal from '../../images/demo/personal.jpg';
import product from '../../images/demo/product.jpg';
import enterprise from '../../images/demo/enterprise.jpg';
import portfolio from '../../images/demo/portfolio.jpg';
import services from '../../images/demo/services.jpg';

class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="demos">
                    <div className="container-fluid">
                        <div className="padding-ten">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12">
                                    <div className="section-title text-center">
                                        <h3 className="mb-4">Template Demos</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index" target="_blank">
                                        <img src={index} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Index</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-saas" target="_blank">
                                            <img src={saas} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">SAAS</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-agency" target="_blank">
                                            <img src={agency}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Agency</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-apps" target="_blank">
                                            <img src={apps}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Application</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-studio" target="_blank">
                                            <img src={studio} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Studio</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-business" target="_blank">
                                            <img src={business} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Business</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-marketing" target="_blank">
                                            <img src={marketing}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Marketing</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-hotel" target="_blank">
                                            <img  src={hotel}   alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Hotel</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-modern-business" target="_blank">
                                            <img src={modernBusiness} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Modern Business</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-coworking" target="_blank">
                                            <img src={coworking}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Coworking Space</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-cloud-hosting" target="_blank">
                                            <img src={hosting}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Cloud Hosting</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-event" target="_blank">
                                            <img src={event} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Event</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-course" target="_blank">
                                            <img src={course}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Course</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-personal" target="_blank">
                                            <img  src={personal} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Personal Portfolio</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-single" target="_blank">
                                            <img src={product} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Single Product</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-enterprise" target="_blank">
                                            <img src={enterprise} alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Enterprise</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-portfolio" target="_blank">
                                            <img src={portfolio}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Minimal Portfolio</h4>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="demo-box">
                                        <Link to="index-services" target="_blank">
                                            <img src={services}  alt="demo-img" className="img-responsive rounded" />
                                        </Link>
                                        <h4 className="mt-3 text-uppercase">Services</h4>
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
export default Demo;
