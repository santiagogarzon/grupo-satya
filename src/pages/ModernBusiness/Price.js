// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import client01 from '../../images/client/01.jpg';
import client02 from '../../images/client/02.jpg';
import client03 from '../../images/client/03.jpg';
import client04 from '../../images/client/04.jpg';
import client05 from '../../images/client/05.jpg';
import client06 from '../../images/client/06.jpg';
import StartupSVG from '../../images/illustrator/Startup_SVG.svg';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../css/carousel.css';

class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        }
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        // console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Charge your creative inspiration</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Free</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-white p-4 rounded">
                                    <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Appointments</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Professional</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Try It Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light p-4 rounded">
                                    <h2 className="title text-uppercase mb-4">Ultimate</h2>
                                    <div className="d-flex mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">79</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Installment</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Started Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={5} md={6}>
                                <img src={StartupSVG} className="img-fluid" alt="" />
                            </Col>
                            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">A better compose with landrick marketing</h4>
                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="list-unstyled feature-list mb-0 text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Important Clients Review</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={9} className="text-center">
                                <div id="owl-fade" className="owl-carousel owl-theme">

                                    <RBCarousel
                                        version={4}
                                        autoplay={this.state.autoplay}
                                        pauseOnVisibility={true}
                                        onSelect={this.visiableOnSelect}
                                        slideshowSpeed={3000}
                                    >
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                                <img src={client01} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Thomas Israel <small className="text-muted">C.E.O</small></h6>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                                                <img src={client02} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Carl Oliver <small className="text-muted">P.A</small></h6>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classNameic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                                                <img src={client03} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
                                            </div>

                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                                                <img src={client04} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Christa Smith <small className="text-muted">Manager</small></h6>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                                <img src={client05} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Dean Tolle <small className="text-muted">Developer</small></h6>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                                                <img src={client06} height="90" className="rounded-pill mx-auto mt-3 shadow" alt="" />
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-primary">- Jill Webb <small className="text-muted">Designer</small></h6>
                                            </div>
                                        </div>

                                    </RBCarousel>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Price;