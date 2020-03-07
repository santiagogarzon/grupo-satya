// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import pen from "../images/icon/pen.svg";
import video from "../images/icon/video.svg";
import intellectual from "../images/icon/intellectual.svg";
import user from "../images/icon/user.svg";
import calendar from "../images/icon/calendar.svg";
import sandClock from "../images/icon/sand-clock.svg";

// client images
import client1 from "../images/client/01.jpg";
import client2 from "../images/client/02.jpg";
import client3 from "../images/client/03.jpg";
import client4 from "../images/client/04.jpg";
import client5 from "../images/client/05.jpg";
import client6 from "../images/client/06.jpg";

import work1 from "../images/work/1.jpg";
import work2 from "../images/work/2.jpg";
import work3 from "../images/work/3.jpg";
import work4 from "../images/work/4.jpg";

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


class PageServices extends Component {

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


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        window.addEventListener("resize", this.updateWindowSize);
        this.updateWindowSize();
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
                <div className={`col-md-${this.state.cols}`} key={items[i].id} id="mt-1">
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
                            <p className="text-muted mt-2">"{items[i].description} "</p>
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
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> Services </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Services</span>
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
                        <Row>
                            <Col md={4} className="col-12">
                                <div className="features mt-5">
                                    <div className="image position-relative d-inline-block">
                                        <img src={pen} alt="Landrick" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Design & Development</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={video} alt="" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Management & Marketing</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                                    </div>
                                </div>
                            </Col>


                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={intellectual} alt="Landrick" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Stratagy & Research</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={user} alt="Landrick" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Easy To Use</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={calendar} alt="Landrick" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Daily Reports</h4>
                                        <p className="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by compiling unusual established word.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="col-12 mt-5">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={sandClock} alt="Landrick" />
                                    </div>
                                    <div className="content mt-4">
                                        <h4 className="title-2">Real Time Zone</h4>
                                        <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.</p>
                                    </div>
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
                        <Row className="justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Our Latest Projects</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work1} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work2} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work3} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work4} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <div className="col-12 text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started Now</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageServices;
