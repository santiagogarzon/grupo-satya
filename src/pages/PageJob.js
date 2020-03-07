// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class PageJob extends Component {

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
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> Jobs / Careers </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark ">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark mr-1">Pages</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark mr-1">Careers</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Jobs</span>
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
                        <Row className="border-bottom">
                            <Col lg={9} md={8}>
                                <div className="section-title">
                                    <h4 className="title mb-2">All Jobs</h4>
                                    <p className="text-muted mb-0">Most Relevance Job</p>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="form custom-form">
                                    <div className="form-group">
                                        <label>Types of jobs :</label>
                                        <select className="form-control" id="Sortbylist-Shop">
                                            <option>All Jobs</option>
                                            <option>Full Time</option>
                                            <option>Half Time</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-12 mt-4 pt-2">
                                <div className="section-title">
                                    <h5 className="mb-0">Recommended Job :</h5>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 1D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Web Designer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">XYZ Info.</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Biejing, China</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence&nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 3D</li>
                                            <li className="list-inline-item text-success">Part Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">UI Designer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Vivo</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Katmandu, Nepal</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 3-4hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 4D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">UX Designer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Oppo</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">New Delhi, India</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 4D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Developer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Google</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Tokyo, Japan</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 4D</li>
                                            <li className="list-inline-item text-success">8hr/day</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Front-End</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Samsung</Link></p>
                                        <p className="mb-0 text-muted">Remote</p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 8hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 5D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Back-End</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Nokia</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Kosovo, Pristina</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence&nbsp; </li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 5D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">HR Manager</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Idea</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Kingston, Jamaica</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 7D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Accountant</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Vodafone</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Kabul, Afghanistan</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence&nbsp; </li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 7D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Designer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Uninor</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Canberra, Australia</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence&nbsp; </li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 8D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">PHP Developer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Alibaba</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Brasilia, Brazil</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 8D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Developer</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Reliance</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Phnom Pehn, Cambodia</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="col-12 mt-4 pt-2">
                                <div className="job-content p-4 border rounded position-relative overflow-hidden">
                                    <div className="head pb-3 border-bottom">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item time float-right text-muted"><i className="mdi mdi-clock-outline"></i> 10D</li>
                                            <li className="list-inline-item text-success">Full Time</li>
                                        </ul>
                                        <h4><Link to="page-job-detail" className="text-dark title">Data Entry</Link></h4>
                                        <p className="mb-2 h6 text-info">Firm: <Link to="#" className="h6 text-dark firm">Maybank</Link></p>
                                        <p className="mb-0"><Link to="#" className="text-muted place">Kuala Lumpur, Malaysia</Link></p>
                                    </div>
                                    <ul className="job-facts pt-3 list-unstyled">
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> No Expirence &nbsp;</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                        <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Data Entry</li>
                                    </ul>
                                    <Link to="page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageJob;
