// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import images
import client1 from '../../images/client/01.jpg';
import client2 from '../../images/client/02.jpg';
import client3 from '../../images/client/03.jpg';
import client4 from '../../images/client/04.jpg';
import client5 from '../../images/client/05.jpg';
import client6 from '../../images/client/06.jpg';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../css/carousel.css';

import Partner from '../../components/Shared/Partner';

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
            autoplay: true,itemCount: 3, // 
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
                        <p className="text-muted mt-4">" {items[i].description} "</p>
                        <img src={items[i].image} className="rounded-pill mx-auto shadow" height="90" alt="" />
                        <ul className="list-unstyled mb-0 mt-3">
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                        </ul>
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
                <section className="section bg-light">
                    <div className="container">
                        <Row>
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Client's Feedback</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={12} className="pt-2 mt-2 text-center">

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
                    
                    <div className="container mt-5 pt-3">
                        <Row className="justify-content-center">
                            <Partner />
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonial;
