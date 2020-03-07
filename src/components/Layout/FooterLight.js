import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
 
// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class FooterLight extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
            <footer className="footer bg-light">
            <div className="container">

                <Row>
                    <Col lg={4} className="col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link className="logo-footer text-dark" to="#">Landrick<span className="text-primary">.</span></Link>
                        <p className="mt-4 text-muted">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                        </ul>
                    </Col>
                    
                    <Col lg={2} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 className="text-dark footer-head">Company</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Aboutus</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Services</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Team</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Pricing</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Features</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> FAQ</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Blog</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Login</Link></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 className="text-dark footer-head">Usefull Links</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Privacy Protection</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Safe Payments</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Terms of Services</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Documentation</Link></li>
                            <li><Link to="#" className="text-muted"><i className="mdi mdi-chevron-right mr-1"></i> Privacy Policy</Link></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={4} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 className="text-dark footer-head">Newsletter</h4>
                        <p className="mt-4 text-muted">Sign up and receive the latest tips via email.</p>
                        <form>
                            <Row>
                                <Col lg={12}>
                                    <div className="foot-subscribe form-group position-relative">
                                        <label className="text-muted">Write your email <span className="text-danger">*</span></label>
                                        <i className="mdi mdi-email ml-3 icons"></i>
                                        <input type="email" name="email" id="emailsubscribe" className="form-control bg-light border pl-5 rounded" placeholder="Your email : " required />
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary w-100" value="Subscribe" />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </div>
        </footer>
        <hr />
        <footer className="footer footer-bar">
            <div className="container text-center">
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="text-sm-left">
                            <p className="mb-0">©  {new Date().getFullYear()} Landrick. Develop by Themesbrand.</p>
                        </div>
                    </Col>

                    <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled payment-cards text-sm-right mb-0">
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={americanEx} title="American Express" alt="" /></Link></li>
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={discover} title="Discover" alt="" /></Link></li>
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={masterCard} title="Master Card" alt="" /></Link></li>
                            <li className="list-inline-item mr-1"><Link to="#"><img src={paypal} title="Paypal" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#"><img src={visa} title="Visa" alt="" /></Link></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterLight;
