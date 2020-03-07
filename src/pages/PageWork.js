// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import work1 from '../images/work/1.jpg';
import work2 from '../images/work/2.jpg';
import work3 from '../images/work/3.jpg';
import work4 from '../images/work/4.jpg';
import work5 from '../images/work/5.jpg';
import work6 from '../images/work/6.jpg';
import work7 from '../images/work/7.jpg';
import work8 from '../images/work/8.jpg';
import work9 from '../images/work/9.jpg';
import work10 from '../images/work/10.jpg';
import work11 from '../images/work/11.jpg';
import work12 from '../images/work/12.jpg';

class PageWork extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation);
     }
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
        }
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
                                            <h4 className="title"> Works & Portfolio </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Portfolio</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Work Grid</span>
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
                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work1} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work2} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work3} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work4} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work5} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Dancing With Myself</Link>
                                            <small className="text-light">Photography</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work6} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">New trends in SEO</Link>
                                            <small className="text-light">Business</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work7} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work8} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work9} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work10} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work11} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Dancing With Myself</Link>
                                            <small className="text-light">Photography</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="col-12 mb-4 pb-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work12} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="page-work-detail" className="title text-white d-block font-weight-bold">New trends in SEO</Link>
                                            <small className="text-light">Business</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>


                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0 list-unstyled">
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Prev</Link></li>
                                    <li className="active"><Link to="#" className="pr-3 pl-3 pt-2 pb-2">1</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">2</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">3</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Next</Link></li>
                                </ul>
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageWork;
