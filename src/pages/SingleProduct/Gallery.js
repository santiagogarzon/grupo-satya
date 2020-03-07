// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import single01 from '../../images/single/01.jpg';
import single02 from '../../images/single/02.jpg';
import single03 from '../../images/single/03.jpg';
import single04 from '../../images/single/04.jpg';
import single05 from '../../images/single/05.jpg';
import single06 from '../../images/single/06.jpg';
import single07 from '../../images/single/07.jpg';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgArray: [single01, single02, single03, single04, single05, single06, single07],
            curImg : 0
        }
    }
   
    componentWillMount() {
        setInterval( () => {
            if(this.state.curImg === 4)
            {
                this.setState({  curImg : 0 });
            } else {
                this.setState({
                    curImg : this.state.curImg + 1
                });
            }
        },2500);
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col md={6} lg={6} sm={6}  className="col-md-6">
                                <div className="slider slider-for">
                                    <div><img src={this.state.imgArray[this.state.curImg]} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                </div>
                              
                                <Row style={{ backgroundColor: "#f9fafe", marginLeft: "0px", marginRight: "0px", marginTop: "6px" }}>
                                    <Col md={4} sm={4} lg={4}>
                                        <div><img src={this.state.imgArray[this.state.curImg]} id="slide_1" className="img-fluid" alt="alt" /></div>
                                    </Col>
                                    <Col md={4} sm={4} lg={4}>
                                        <div><img src={this.state.imgArray[this.state.curImg + 1]} id="slide_2" className="img-fluid" alt="alt" /></div>
                                    </Col>
                                    <Col md={4} sm={4} lg={4}>
                                        <div><img src={this.state.imgArray[this.state.curImg + 2]} id="slide_3" className="img-fluid" alt="alt" /></div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-md-4">
                                    <h4 className="title mb-4">DJI Spark Drone</h4>
                                    <div className="mt-4">
                                        <div className="float-right text-warning">
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star-half"></span>
                                            <span className="text-muted pl-3">23 Reviews</span>
                                        </div>
                                        <h4 className="mt-4"><b>$ 1800</b></h4>
                                    </div>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-check mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Create your own skin to match your brand</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Sign up for our Newsletter</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10} >
                                <form>
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required="" />
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

export default Gallery;