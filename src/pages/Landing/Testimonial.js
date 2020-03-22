// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../css/carousel.css";

// Import images
import analyzeReport4 from '../../images/illustrator/analyze_report_4.svg';
import client1 from '../../images/client/1.png';
import client2 from '../../images/client/2.png';
import client3 from '../../images/client/3.png';
import client4 from '../../images/client/4.png';
import client5 from '../../images/client/5.png';
import client6 from '../../images/client/6.png';

const items = [
    {
        id:1,
        image: client1,
        title: "Thomas Israel",
        description: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
    },
    {
        id:2,
        image: client2,
        title: "Carl Oliver",
        description: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
    }, {
        id:3,
        image: client3,
        title: "Barbara McIntosh",
        description: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."
    }, {
        id:4,
        image: client4,
        title: "Jill Webb",
        description: "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."
    }, {
        id:5,
        image: client5,
        description: "There is now an abundance of readable dummy texts. These are usually used when a text is required..",
        title: "Dean Tolle"
    }, {
        id:6,
        image: client6,
        title: "Christa Smith",        
        description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero..",
    }
];


class Testimonial extends Component {

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
            if ( i % this.state.itemCount === 0 && i > 0) {
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
                    <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                        <img src={items[i].image} className="mx-auto" alt="" />
                        <p className="text-muted mt-4">" {items[i].description} "</p>
                        <h6 className="text-primary">- {items[i].title}</h6>
                    </div>
                </div>
            );
        }
        if(itemsData){
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
                <section className="section">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <img src={analyzeReport4} className="mr-md-4" alt="" />
                            </Col>

                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                    <h4 className="title mb-4">Clean And Modern Code</h4>
                                    <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                    <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="title mb-4">Our Happy Customers</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
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

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Subscribe for our Latest Newsletter</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10}>
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required="" aria-describedby="newssubscribebtn" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary submitBnt" type="button" id="newssubscribebtn">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonial;
