// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import recoveryimg from '../images/user/recovery.png';

class PageRecoveryPassword extends Component {

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
                                            <img src={recoveryimg} className="img-fluid" alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <div className="login_page bg-white shadow rounded p-4">
                                            <div className="text-center">
                                                <h4 className="mb-4">Recover Account</h4>
                                            </div>
                                            <form className="login-form">
                                                <Row>
                                                    <Col lg={12}>
                                                        <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                        <div className="form-group position-relative">
                                                            <label>Email address <span className="text-danger">*</span></label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <input type="email" className="form-control pl-5" placeholder="Enter Your Email Address" name="email" required="" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <button type="button" className="btn btn-primary w-100">Send</button>
                                                    </Col>
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
export default PageRecoveryPassword;