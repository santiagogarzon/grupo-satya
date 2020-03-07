// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// RBCarousel Declare
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../css/carousel.css";

// Import images
import client1 from '../../images/client/01.jpg';
import client2 from '../../images/client/02.jpg';
import client3 from '../../images/client/03.jpg';
import client4 from '../../images/client/04.jpg';
import client5 from '../../images/client/05.jpg';
import client6 from '../../images/client/06.jpg';
import roundDark from '../../images/shapes/round-dark.png';

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
                    <div className="customer-testi p-3 text-center">
                        <img src={items[i].image}height="80" className="rounded-pill mx-auto shadow" alt="item" />
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
                <section className="section pt-0">
                    <div className="container">
                        <Row>

                        <RBCarousel
                                    version={4}
                                    autoplay={this.state.autoplay}
                                    pauseOnVisibility={true}
                                    onSelect={this.visiableOnSelect}
                                    slideshowSpeed={3000}
                                >
                                    {this.showItems()}
                                </RBCarousel>

                          
                        </Row>

                        <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="main-title mb-4">Get the App now !</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-2">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</Link>
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
