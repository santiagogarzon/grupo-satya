// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import user02 from '../images/user/02.jpg';

class PageCoverSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function() {   document.getElementById("pageLoader").style.display = "none";   }, 1000);
    }

    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="cover-user bg-white">
                    <div className="container-fluid">
                        <Row className="position-relative">
                            <Col lg={4} className="cover-my-30 order-2">
                                <div className="cover-user-img d-flex align-items-center">
                                    <Row>
                                        <Col>
                                            <div className="login_page">
                                                <div className="text-center">
                                                    <h4 className="mb-4">Signup</h4>
                                                </div>
                                                <form className="login-form">
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="form-group position-relative">
                                                                <label>First name <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <input type="text" className="form-control pl-5" placeholder="First Name" name="s" required="" />
                                                            </div>
                                                        </Col>

                                                        <Col md={6}>
                                                            <div className="form-group position-relative">
                                                                <label>Last name <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <input type="text" className="form-control pl-5" placeholder="Last Name" name="s" required="" />
                                                            </div>
                                                        </Col>

                                                        <Col md={12}>
                                                            <div className="form-group position-relative">
                                                                <label>Your Email <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <input type="email" className="form-control pl-5" placeholder="Email" name="email" required="" />
                                                            </div>
                                                        </Col>

                                                        <Col md={12}>
                                                            <div className="form-group position-relative">
                                                                <label>Password <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-key ml-3 icons"></i>
                                                                <input type="password" className="form-control pl-5" placeholder="Password" required="" />
                                                            </div>
                                                        </Col>

                                                        <Col md={12}>
                                                            <div className="form-group position-relative">
                                                                <label>Confirm Password <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-key ml-3 icons"></i>
                                                                <input type="password" className="form-control pl-5" placeholder="Confirm Password" required="" />
                                                            </div>
                                                        </Col>

                                                        <Col md={12}>
                                                            <div className="form-group">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                    <label className="custom-control-label" htmlFor="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col md={12}>
                                                            <button type="button" className="btn btn-primary w-100">Register</button>
                                                        </Col>

                                                        <Col lg={12} className="mt-4 text-center">
                                                            <h6>Or Signup With</h6>
                                                            <ul className="list-unstyled social-icon mb-0 mt-3">
                                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                                <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                            </ul>
                                                        </Col>

                                                        <div className="mx-auto">
                                                            <p className="mb-0 mt-3"><small className="text-dark mr-2">Already have an account ?</small> <Link to="page-cover-login" className="text-dark font-weight-bold">Sign in</Link></p>
                                                        </div>
                                                    </Row>
                                                </form>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={8} className="offset-lg-4 padding-less img order-1" style={{ backgroundImage: `url(${user02})` }} ></Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageCoverSignup;
