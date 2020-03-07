// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import loginImg from '../images/user/login.png';

class PageLogin extends Component {

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

                <section className="bg-home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={8} md={6}>
                                        <div className="mr-lg-5">
                                            <img src={loginImg} className="img-fluid" alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="login-page bg-white shadow rounded p-4">
                                            <div className="text-center">
                                                <h4 className="mb-4">Login</h4>
                                            </div>
                                            <form className="login-form">
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Your Email <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="email" className="form-control pl-5" placeholder="Email" name="email" required="" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="form-group position-relative">
                                                            <label>Password <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <input type="password" className="form-control pl-5" placeholder="Password" required="" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <p className="float-right forgot-pass"><Link to="page-recovery-password" className="text-dark font-weight-bold">Forgot password ?</Link></p>
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} className="mb-0">
                                                        <button type="button" className="btn btn-primary w-100">Sign in</button>
                                                    </Col>

                                                    <Col lg={12} className="mt-4 text-center">
                                                        <h6>Or Login With</h6>
                                                        <ul className="list-unstyled social-icon mb-0 mt-3">
                                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                        </ul>
                                                    </Col>
                                                    <div className="col-12 text-center">
                                                        <p className="mb-0 mt-3"><small className="text-dark mr-2">Don't have an account ?</small> <Link to="page-signup" className="text-dark font-weight-bold">Sign Up</Link></p>
                                                    </div>
                                                </Row>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageLogin;