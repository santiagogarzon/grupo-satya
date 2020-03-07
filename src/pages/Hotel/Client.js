// React Basic and Bootstrap
import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

// Import images
import bg05 from "../../images/hotel/bg05.jpg";

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./client.scss";

// import client images
import client01 from "../../images/client/01.jpg";
import client02 from "../../images/client/02.jpg";
import client03 from "../../images/client/03.jpg";
import client04 from "../../images/client/04.jpg";
import client05 from "../../images/client/05.jpg";
import client06 from "../../images/client/06.jpg";

class Client extends Component {

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
                <section className="section" style={{ background: `url(${bg05})` }}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={7} className="text-center">

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
                                                <p className="text-light h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Thomas Israel </h6>
                                                <img src={client01} height="90" className="rounded-pill mx-auto shadow" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-light h6 font-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Carl Oliver </h6>
                                                <img src={client02} height="90" className="rounded-pill mx-auto shadow" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-light h6 font-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classNameic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Barbara McIntosh </h6>
                                                <img src={client03} height="90" className="rounded-pill mx-auto shadow" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-light h6 font-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Christa Smith </h6>
                                                <img src={client04} height="90" className="rounded-pill mx-auto shadow" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-light h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Dean Tolle </h6>
                                                <img src={client05} height="90" className="rounded-pill mx-auto shadow" alt="" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="customer-testi text-center">
                                                <p className="text-light h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <h6 className="text-light"> Jill Webb </h6>
                                                <img src={client06} height="90" className="rounded-pill mx-auto shadow" alt="" />
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

export default Client;