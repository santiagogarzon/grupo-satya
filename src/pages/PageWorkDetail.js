// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';

import singleImg from "../images/work/single.jpg";
import work2 from "../images/work/2.jpg";
import work3 from "../images/work/3.jpg";
import work6 from '../images/work/6.jpg';

import client01 from '../images/client/01.jpg';
import client02 from '../images/client/02.jpg';
import client03 from '../images/client/03.jpg';
import client04 from '../images/client/04.jpg';

class PageWorkDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
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
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> New Trends in SEO </h4>
                                            <ul className="list-unstyled mt-4">
                                                <li className="list-inline-item h6 user text-muted mr-2"> <span className="text-dark">Client :</span> Calvin Carlo</li>
                                                <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span> 23th Sep, 2019</li>
                                            </ul>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Portfolio</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Work Detail</span>
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
                        <Row className="justify-content-center">
                            <div className="col-12 text-center">
                                <img src={singleImg} className="img-fluid rounded" alt="" />
                            </div>

                            <Col md={10} className="mt-4 pt-2">
                                <div className="bg-light rounded p-4">
                                    <p className="text-muted font-italic mb-0">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language. "</p>
                                </div>

                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work2} className="img-fluid rounded" alt="" />
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work3} className="img-fluid rounded" alt="" />
                                    </Col>
                                </Row>

                                <div className="bg-light rounded p-4 mt-4 pt-2">
                                    <p className="text-muted font-italic mb-0">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classNameic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>

                                    <ul className="list-unstyled feature-list text-muted mt-4">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    </ul>
                                </div>

                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <div className="work-details rounded bg-light p-4">
                                            <h5 className="title border-bottom pb-3 mb-3">Project Info :</h5>
                                            <ul className="list-unstyled mb-0">
                                                <li className="mt-3">
                                                    <b>Client :</b>
                                                    <span>Calvin Carlo</span>
                                                </li>
                                                <li className="mt-3">
                                                    <b>Category :</b>
                                                    <span>Web Design</span>
                                                </li>
                                                <li className="mt-3">
                                                    <b>Date :</b>
                                                    <span>23rd Sep, 2019</span>
                                                </li>
                                                <li className="mt-3">
                                                    <b>Website :</b>
                                                    <span>www.yourdomain.com</span>
                                                </li>
                                                <li className="mt-3">
                                                    <b>Location :</b>
                                                    <span>3/2/64 Mongus Street, UK</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work6} className="img-fluid rounded" alt="" />
                                    </Col>
                                </Row>

                                <div className="shadow rounded mt-4 pt-2">
                                    <div className="p-4">
                                        <h4 className="page-title pb-3">Comments :</h4>
                                        <ul className="media-list list-unstyled mb-0">
                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client01} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Lorenzo Peterson</Link></h4>
                                                        <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>
                                            </li>

                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client02} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                        <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>
                                            </li>

                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client03} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                        <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>

                                                <ul className="pl-4 pl-md-5 list-unstyled sub-comment">
                                                    <li className="comment-desk mt-4">
                                                        <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                        <div className="commentor">
                                                            <Link className="float-left pr-3" to="#">
                                                                <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client04} alt="img" />
                                                            </Link>
                                                            <div className="overflow-hidden d-block">
                                                                <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Calvin Camacho</Link></h4>
                                                                <small className="text-muted">16th August, 2019 at 05:55 pm</small>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </li>

                                                    <li className="comment-desk mt-4">
                                                        <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                        <div className="commentor">
                                                            <Link className="float-left pr-3" to="#">
                                                                <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client02} alt="img" />
                                                            </Link>
                                                            <div className="overflow-hidden d-block">
                                                                <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                                <small className="text-muted">17th August, 2019 at 05:44 pm</small>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2 p-4 shadow rounded">
                                    <h4 className="page-title pb-3">Leave A Comment :</h4>
                                    <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                           Data Sended Successfully.
                                         </Alert>
                                    <form  onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md={12}>
                                                <div className="form-group position-relative">
                                                    <label>Your Comment</label>
                                                    <i className="mdi mdi-comment-outline ml-3 icons"></i>
                                                    <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control pl-5" required></textarea>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Name <span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control pl-5" required />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Email <span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <input id="email" type="email" placeholder="Email" name="email" className="form-control pl-5" required />
                                                </div>
                                            </Col>

                                            <Col md={12}>
                                                <div className="send">
                                                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageWorkDetail;
