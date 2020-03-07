// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';

// Import images
import bg01 from '../../images/hotel/bg01.jpg';
import bg02 from '../../images/hotel/bg02.jpg';
import bg03 from '../../images/hotel/bg03.jpg';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import './carousel.css';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import generic components
import Rooms from './Rooms';
import Cta from './Cta';
import Services from './Services';
import News from './News';
import Client from './Client';
import Contact from './Contact';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            isOpen: false,
            startDate: new Date(),
            endDate: new Date(),
            Contactvisible : false
        }
        this.openModal = this.openModal.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  


    handleStart = date => {
        this.setState({
            startDate: date
        });
    };

    handleEnd = date => {
        this.setState({
            endDate: date
        });
    };

    openModal() {
        this.setState({ isOpen: true })
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

                {/* Hero Start */}
                <section className="main-slider">
                    <ul className="slides">
                        <RBCarousel
                            version={4}
                            autoplay={this.state.autoplay}
                            pauseOnVisibility={true}
                            onSelect={this.visiableOnSelect}
                            slideshowSpeed={3000}
                        >
                            <div className="item">
                                <li className="bg-slider bg-animation-left" style={{ backgroundImage: `url(${bg01})` }} >
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="align-items-center">
                                                    <Col lg={7} md={7}>
                                                        <div className="title-heading position-relative mt-4" style={{ zIndex: 1 }}>
                                                            <h1 className="heading mb-3">Enjoy Better Holidays With Landrick Resort</h1>
                                                            <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="watch-video mt-4 pt-2">
                                                                <Link to="#"  onClick={this.openModal} className="video-play-icon watch text-dark"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="item">

                                <li className="bg-slider bg-animation-left" style={{ backgroundImage: `url(${bg02})` }} >
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="align-items-center">
                                                    <Col lg={7} md={7}>
                                                        <div className="title-heading position-relative mt-4" style={{ zIndex: 1 }}>
                                                            <h1 className="heading mb-3">Enjoy The World of Relaxation</h1>
                                                            <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="watch-video mt-4 pt-2">
                                                               <Link to="#"  className="btn btn-primary">Aboutus</Link> 
                                                              </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="item">
                                <li className="bg-slider bg-animation-left" style={{ backgroundImage: `url(${bg03})` }} >
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="container">
                                                <Row className="align-items-center">
                                                    <Col lg={7} md={7}>
                                                        <div className="title-heading position-relative mt-4" style={{ zIndex: 1 }}>
                                                            <h1 className="heading mb-3">Welcome Landrick <br /> A Stunning Hotel</h1>
                                                            <p className="para-desc">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                                            <div className="watch-video mt-4 pt-2">
                                                                <Link to="#"  className="btn btn-primary">Book now</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                         </RBCarousel>
                    </ul>
                </section>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />


                {/* Partner */}
                <section className="section-two bg-light" style={{ marginTop: "-27px" }}>
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={12}>

                            <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                    Registration Done Successfully.
                            </Alert>

                                <form onSubmit={this.handleSubmit} className="p-4 shadow bg-white rounded">
                                    <h4 className="mb-3">Book Now !</h4>
                                    <Row className="text-left">
                                        <Col lg={3} md={6}>
                                            <div className="form-group">
                                                <label> Check in : </label> <br />
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleStart}
                                                    className="form-control"
                                                />

                                                {/* <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkin-date" /> */}
                                            </div>
                                        </Col>

                                        <Col lg={3} md={6}>
                                            <div className="form-group">
                                                <label> Check out : </label>
                                                <DatePicker
                                                    selected={this.state.endDate}
                                                    onChange={this.handleEnd}
                                                    className="form-control"
                                                />
                                                {/* <input name="date" type="text" className="flatpickr flatpickr-input form-control" id="checkout-date" /> */}
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <Row className="align-items-center">
                                                <Col md={4}>
                                                    <div className="form-group">
                                                        <label>Adults : </label>
                                                        <input type="number" min="0" autoComplete="off" id="adult" required className="form-control" placeholder="Adults :" />
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="form-group">
                                                        <label>Children : </label>
                                                        <input type="number" min="0" autoComplete="off" id="children" className="form-control" placeholder="Children :"  required/>
                                                    </div>
                                                </Col>

                                                <Col md={4} className="mt-2">
                                                    <input type="submit" id="search" name="search" className="searchbtn btn btn-primary w-100 p" value="Search" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* Rooms */}
                <Rooms />

                {/* Cta */}
                <Cta />

                {/* Services */}
                <Services />

                {/* News */}
                <News />

                {/* Client */}
                <Client />

                {/* Contact */}
                <Contact />


            </React.Fragment>
        );
    }
}

export default Index;
