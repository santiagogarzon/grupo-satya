// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// Import images
import client1 from '../../images/client/01.jpg';
import client2 from '../../images/client/02.jpg';
import client3 from '../../images/client/03.jpg';
import client4 from '../../images/client/04.jpg';
import client5 from '../../images/client/05.jpg';
import client6 from '../../images/client/06.jpg';
import roundDark from '../../images/shapes/round-dark.png';

// Blog Images
import blog1 from '../../images/blog/01.jpg';
import blog2 from '../../images/blog/02.jpg';
import blog3 from '../../images/blog/03.jpg';

import '../../css/carousel.css';

const items = [
    {
        id: 1,
        image: client1,
        title: "Thomas Israel",
        description: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
    },
    {
        id: 2,
        image: client3,
        title: "Barbara McIntosh",
        description: " One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
    },
    {
        id: 3,
        image: client2,
        title: "Carl Oliver ",
        description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
    },
    {
        id: 4,
        image: client4,
        title: "Christa Smith ",
        description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. ",
    },
    {
        id: 5,
        image: client5,
        title: " Dean Tolle ",
        description: " There is now an abundance of readable dummy texts. These are usually used when a text is required. ",
    },
    {
        id: 6,
        image: client6,
        title: "Jill Webb ",
        description: "  Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. ",
    },
];


class Testi extends Component {

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
                            <p className="text-muted mt-2">" {items[i].description}"</p>
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

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">Client Reviews</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={12} className="text-center">

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

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Latest News</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog1} className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Design your apps in your own way</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog2} className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">How apps is changing the IT world</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog3} className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Smartest Applications for Business</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={roundDark} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testi;