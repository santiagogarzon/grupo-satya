// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import hotel01 from "../../images/hotel/01.jpg";
import hotel02 from "../../images/hotel/02.jpg";
import hotel03 from "../../images/hotel/03.jpg";
import hotel04 from "../../images/hotel/04.jpg";
import hotel05 from "../../images/hotel/05.jpg";
import hotel06 from "../../images/hotel/06.jpg";
import hotel07 from "../../images/hotel/07.jpg";
import hotel08 from "../../images/hotel/08.jpg";
import hotel09 from "../../images/hotel/09.jpg";

class Rooms extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                <div className="container">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="main-title mb-4">Rooms & Suits</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel01} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Regular Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$350</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel02} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Regular Big Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$800</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel03} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Deluxe Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>2 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$1100</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel04} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Super Deluxe Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>2 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>2 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$1400</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel05} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Deluxe Big Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>3 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>3 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$1600</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel06} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Family Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>3 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>2 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$1750</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel07} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Premium Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$1890</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
 
                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel08} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Super Premium Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$2050</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <div className="work-container position-relative rounded">                                
                            <div className="position-relative overflow-hidden">
                                <img src={hotel09} className="img-fluid rounded" alt="work" />
                                <div className="content">
                                    <Link to="#" className="title text-white pb-2 border-bottom">Premium Big Room</Link>
                                    <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                        <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                        <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                    </ul>
                                    <p className="text-white d-block mb-0">Rent <span className="text-success">$2500</span> /Night</p>
                                </div>
                                <div className="read_more bg-primary text-center rounded-pill">
                                    <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right mdi-18px"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4 pt-2">
                        <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Rooms;