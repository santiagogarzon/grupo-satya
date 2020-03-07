// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import img13 from '../../images/work/13.jpg';
import img14 from '../../images/work/14.jpg';
import img15 from '../../images/work/15.jpg';
import img16 from '../../images/work/16.jpg';
import img17 from '../../images/work/17.jpg';
import img18 from '../../images/work/18.jpg';
import img19 from '../../images/work/19.jpg';
import img20 from '../../images/work/20.jpg';

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDiv: "All"
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row>
                            <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                                <li className="list-inline-item"><Link  to="#" onClick={() => this.setState({ currentDiv: "All" })} className={this.state.currentDiv === "All" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" }>All</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setState({ currentDiv: "Branding" })} className={this.state.currentDiv === "Branding" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" } >Branding</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setState({ currentDiv: "Designing" })} className={this.state.currentDiv === "Designing" ? "categories border d-block text-dark rounded active" :"categories border d-block text-dark rounded"  }>Designing</Link></li>
                                <li className="list-inline-item"><Link  to="#" onClick={() => this.setState({ currentDiv: "Photography" })} className={this.state.currentDiv === "Photography" ?  "categories border d-block text-dark rounded active" :  "categories border d-block text-dark rounded" } >Photography</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setState({ currentDiv: "Development" })} className={this.state.currentDiv === "Development" ?"categories border d-block text-dark rounded active"  : "categories border d-block text-dark rounded" } >Development</Link></li>
                            </ul>
                        </Row>
                    </div>
                    
                    <div className="container-fluid">
                        <Row className="container-grid projects-wrapper">
                            {this.state.currentDiv === "All" || this.state.currentDiv === "Branding" || this.state.currentDiv === "Designing" || this.state.currentDiv === "Development" ?
                                <Col lg={3} md={6} className="spacing designing">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/13.jpg" title="" >
                                            <img src={img13} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col>
                                : null}
                            {this.state.currentDiv === "All" || this.state.currentDiv === "Photography" ?
                                <Col lg={3} md={6} className="spacing photography">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/14.jpg" title="">
                                            <img src={img14} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col>
                                : null}

                            {this.state.currentDiv === "All" || this.state.currentDiv === "Branding" || this.state.currentDiv === "Developing" ?
                                <Col lg={3} md={6} className="spacing designing">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/15.jpg"  title="">
                                            <img src={img15} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col>
                                : null}

                            {this.state.currentDiv === "All" || this.state.currentDiv === "Designing" || this.state.currentDiv === "Branding" ?
                                <Col lg={3} md={6} className="spacing designing">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/16.jpg"title="">
                                            <img src={img16} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col>
                                : null}

                            {this.state.currentDiv === "All" || this.state.currentDiv === "Designing" ?
                                <Col lg={3} md={6} className="spacing branding">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/17.jpg" title="">
                                            <img src={img17} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Dancing With Myself</Link>
                                            <small className="text-light">Photography</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col>
                                : null}


                            {this.state.currentDiv === "All" || this.state.currentDiv === "Photography" ?

                                <Col lg={3} md={6} className="spacing development">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/18.jpg"  title="">
                                            <img src={img18} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">New trends in SEO</Link>
                                            <small className="text-light">Business</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col> : null}


                            {this.state.currentDiv === "All" || this.state.currentDiv === "Branding" ?
                                <Col lg={3} md={6} className="spacing branding">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" target="_blank" to="/work/19.jpg"  title="">
                                            <img src={img19} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </Col> : null}

                                {this.state.currentDiv === "All" || this.state.currentDiv === "Development" ?
                                   <Col lg={3} md={6} className="spacing development">
                                   <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                       <Link className="mfp-image d-inline-block"  target="_blank" to="/work/20.jpg"  title="">
                                           <img src={img20} className="img-fluid rounded" alt="work" />
                                           <div className="overlay-work"></div>
                                       </Link>
                                       <div className="content personal-port">
                                           <Link to="page-work-detail" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                           <small className="text-light">Branding</small>
                                       </div>
                                       <div className="client personal-port">
                                           <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                           <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                       </div>
                                   </div>
                               </Col>
                              : null}
                         </Row>
                    </div>
                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Let's talk about your portfolio</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary">Get Started Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Work;