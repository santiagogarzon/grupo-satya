// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import user03 from '../images/user/03.jpg';

class PageCoverRePassword extends Component {

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
                            </Col>
                            <Col lg={8} className="offset-lg-4 padding-less img order-1" style={{ backgroundImage: `url(${user03})` }} ></Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageCoverRePassword;
