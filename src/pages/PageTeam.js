// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import team1 from '../images/team/1.jpg';
import team2 from '../images/team/2.jpg';
import team3 from '../images/team/3.jpg';
import team4 from '../images/team/4.jpg';
import team5 from '../images/team/5.jpg';
import team6 from '../images/team/6.jpg';
import team7 from '../images/team/7.jpg';
import team8 from '../images/team/8.jpg';

class PageTeam extends Component {

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
                                            <h4 className="title"> Team Members </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Team</span>
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
                            <div className="col-12 text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Our Greatest Minds</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team1} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Ronny Jofra</Link></h5>
                                        <small className="designation text-muted">C.E.O</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team2} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Micheal Carlo</Link></h5>
                                        <small className="designation text-muted">Director</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team3} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Aliana Rosy</Link></h5>
                                        <small className="designation text-muted">Manager</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team4} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Sofia Razaq</Link></h5>
                                        <small className="designation text-muted">Developer</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team5} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Calvin Carlo</Link></h5>
                                        <small className="designation text-muted">C.E.O</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team6} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Juhi Chawla</Link></h5>
                                        <small className="designation text-muted">Director</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team7} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Arlo Walker</Link></h5>
                                        <small className="designation text-muted">Manager</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={6} className="mt-4 pt-2">
                                <div className="team text-center">
                                    <div className="position-relative">
                                        <img src={team8} className="img-fluid d-block rounded-pill mx-auto" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content pt-3 pb-3">
                                        <h5 className="mb-0"><Link to="#" className="name text-dark">Randeep Huda</Link></h5>
                                        <small className="designation text-muted">Developer</small>
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
export default PageTeam;
