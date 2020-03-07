// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import client1 from "../images/client/01.jpg";
import client2 from "../images/client/02.jpg";
import client3 from "../images/client/03.jpg";
import client4 from "../images/client/04.jpg";
import client5 from "../images/client/05.jpg";
import client6 from "../images/client/06.jpg";

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../css/carousel.css";

const items = [
    {
        id: 1,
        image: client1,
        title: "Thomas Israel",
        description: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
    },
    {
        id: 2,
        image: client2,
        title: "Carl Oliver",
        description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
    }, {
        id: 3,
        image: client3,
        title: "Barbara McIntosh",
        description: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
    }, {
        id: 4,
        image: client4,
        title: "Jill Webb",
        description: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."
    }, {
        id: 5,
        image: client5,
        description: "There is now an abundance of readable dummy texts. These are usually used when a text is required..",
        title: "Dean Tolle"
    }, {
        id: 6,
        image: client6,
        title: "Christa Smith",
        description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero..",
    }
];


class PagePricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            itemCount: 3, // 
            cols: 4,
            total: 6
        }
    }
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

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowSize);
        this.updateWindowSize();
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
       // Make sure to remove the DOM listener when the component is unmounted.
       componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation);
        window.removeEventListener("resize",this.updateWindowSize);
     }



    updateWindowSize = () => {
        if (window.outerWidth >= 1230) {
            this.setState({ itemCount: 3, cols: 4 });
        }
        else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
            this.setState({ itemCount: 2, cols: 6 });
        }
        else if (window.outerWidth <= 970) {
            this.setState({ itemCount: 1, cols: 12 });
        }
    }

    showItems = () => {

        var itemsData = [];
        var data = [];
        for (var i = 0; i < this.state.total; i++) {
            if (i % this.state.itemCount === 0 && i > 0) {
                data.push(
                    <div className="item" key={i}>
                        <div className="row">
                            {itemsData}
                        </div>
                    </div>
                );
                itemsData = [];
            }
            itemsData.push(
                <div className={`col-md-${this.state.cols}`} key={items[i].id}>

                    <div className="customer-testi text-left">
                        <img src={items[i].image} height="80" className="rounded shadow float-left mr-3" alt="" />
                        <div className="content overflow-hidden d-block p-3 shadow rounded bg-white">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            </ul>
                            <p className="text-muted mt-2">" {items[i].description} "</p>
                            <h6 className="text-primary">- {items[i].title} <small className="text-muted">Manager</small></h6>
                        </div>
                    </div>
                </div>
            );
        }
        if (itemsData) {
            data.push(
                <div className="item" key={i}>
                    <div className="row">
                        {itemsData}
                    </div>
                </div>
            );
        }
        return data;
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
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> Pricing </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Price</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Choose Simple Pricing</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </Row>

                        <Row className="align-items-center">
                            <Col md={4} className="col-12">
                                <div className="pricing-rates business-rate shadow bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Free</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="pricing-rates business-rate shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">39</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Appointments</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Free Installment</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="pricing-rates business-rate shadow bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Professional</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price display-4 mb-0">59</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Try It Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Client Reviews</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={12} className="text-center">
                                <div id="customer-testi" className="owl-carousel owl-theme">

                                    <RBCarousel
                                        version={4}
                                        autoplay={this.state.autoplay}
                                        pauseOnVisibility={true}
                                        onSelect={this.visiableOnSelect}
                                        slideshowSpeed={3000}
                                    >
                                        {this.showItems()}
                                    </RBCarousel>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </section>

                <section className="section bg-light">
                    <div className="container">
                        <Row>
                            <Col md={6} className="col-12">
                                <div className="faq-container">
                                    <h4 className="question"><i className="mdi mdi-help-circle text-primary mr-2 h4"></i> How our <span className="text-primary">Landrick</span> work ?</h4>
                                    <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                                </div>
                            </Col>

                            <Col md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="faq-container">
                                    <h4 className="question"><i className="mdi mdi-help-circle text-primary mr-2 h4"></i> What is the main process open account ?</h4>
                                    <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                                </div>
                            </Col>

                            <Col md={6} className="col-12 mt-4 pt-2">
                                <div className="faq-container">
                                    <h4 className="question"><i className="mdi mdi-help-circle text-primary mr-2 h4"></i> How to make unlimited data entry ?</h4>
                                    <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                                </div>
                            </Col>

                            <Col md={6} className="col-12 mt-4 pt-2">
                                <div className="faq-container">
                                    <h4 className="question"><i className="mdi mdi-help-circle text-primary mr-2 h4"></i> Is <span className="text-primary">Landrick</span> safer to use with my account ?</h4>
                                    <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="main-title mb-4">Have Question ? Get in touch!</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="page-contact-two" className="btn btn-primary mt-4">Contact us <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PagePricing;
