// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../css/carousel.css";

// Import images
import youtubeMedia from '../../images/illustrator/youtube-media.svg';
import client1 from '../../images/client/01.jpg';
import client2 from '../../images/client/02.jpg';
import client3 from '../../images/client/03.jpg';
import client4 from '../../images/client/04.jpg';
import client5 from '../../images/client/05.jpg';
import client6 from '../../images/client/06.jpg';


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

class Feature extends Component {

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
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
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
                            <p className="text-muted mt-2">"{items[i].description}"</p>
                            <h6 className="text-primary">- {items[i].title} <small className="text-muted">Developer</small></h6>
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


    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Sample Features</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-internet-explorer text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Browser Compatibility</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cryengine text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Retina Ready</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-bootstrap text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Based On Bootstrap 4</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-cube-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Material Design Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-sass text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Built With SASS</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-check-decagram text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">W3c Valid Code</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-vector-bezier text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Flaticon Icon</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded bg-white shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-settings-outline text-primary"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Easy to customize</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={5} md={6}>
                                <img src={youtubeMedia} alt="" />
                            </Col>

                            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">A better compose with landrick marketing</h4>
                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="list-unstyled feature-list text-muted">
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
                                    <h4 className="main-title mb-4">Our Valuable Clients</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="row justify-content-center">
                            <Col className="text-center">

                                <RBCarousel
                                    version={4}
                                    autoplay={this.state.autoplay}
                                    pauseOnVisibility={true}
                                    onSelect={this.visiableOnSelect}
                                    slideshowSpeed={3000}
                                >
                                    {this.showItems()}
                                </RBCarousel>


                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;