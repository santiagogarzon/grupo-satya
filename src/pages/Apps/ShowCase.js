// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

//import images
import app1 from '../../images/app/1.png';
import app2 from '../../images/app/2.png';
import app3 from '../../images/app/3.png';
import app4 from '../../images/app/4.png';
import roundWhite from '../../images/shapes/round-white.png';

class ShowCase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1"
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0 bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4">How Can We Help You ?</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col lg={5} md={6} >
                                <img src={app1} className="img-fluid mx-auto d-block" alt="" />
                            </Col>

                            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">Best <span className="text-primary">Landrick</span> App Partner For Your Life</h4>
                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-60">
                                    <h4 className="main-title mb-4"><span className="text-primary">Landrick</span> App Showcase</h4>
                                    <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <Row className="mt-4 justify-content-center">
                                        <Col lg={8} md={12}  className="text-center" style={{ marginTop : "32px" }}>
                                            <Nav  pills id="navnav" className="nav-justified flex-column flex-sm-row">
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '1' })}
                                                        onClick={() => { this.toggle('1'); }}>
                                                           <div style={{ minWidth: "200px" }} className="text-center pt-1 pb-1 rounded">
                                                            <h4 className="title font-weight-normal mb-0">High Performance</h4>
                                                        </div>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                        onClick={() => { this.toggle('2'); }} >
                                                        <div style={{ minWidth: "200px" }} className="text-center pt-1 pb-1">
                                                            <h4 className="title font-weight-normal mb-0">Creative Design</h4>
                                                        </div>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '3' })}
                                                        onClick={() => { this.toggle('3'); }} >
                                                        <div style={{ minWidth: "200px" }} className="text-center pt-1 pb-1">
                                                            <h4 className="title font-weight-normal mb-0">24 / 7 Support</h4>
                                                        </div>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Col>
                                    </Row>

                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img src={app2} className="img-fluid mx-auto d-block" alt="" />
                                            </Col>

                                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <div className="section-title">
                                                    <h4 className="title mb-4"><i className="mdi mdi-chevron-double-right text-primary"></i> High Performing Landing App</h4>
                                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                                    </ul>
                                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img src={app3} className="img-fluid mx-auto d-block" alt="" />
                                            </Col>

                                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <div className="section-title">
                                                    <h4 className="title mb-4"><i className="mdi mdi-chevron-double-right text-primary"></i> Creative Design and Clean Code</h4>
                                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                                    </ul>
                                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">

                                        <Row className="align-items-center">
                                            <Col md={6}>
                                                <img src={app4} className="img-fluid mx-auto d-block" alt="" />
                                            </Col>

                                            <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <div className="section-title">
                                                    <h4 className="title mb-4"><i className="mdi mdi-chevron-double-right text-primary"></i> 24 / 7 App Supports and Responsive</h4>
                                                    <p className="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                    <ul className="list-unstyled feature-list text-muted">
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                                        <li><i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Create your own skin to match your brand</li>
                                                    </ul>
                                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-fluid">
                        <Row>
                            <div className="home-shape-bottom">
                                <img src={roundWhite} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ShowCase;
