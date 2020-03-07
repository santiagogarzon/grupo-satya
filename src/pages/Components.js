// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse,TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

// import images
import client05 from "../images/client/05.jpg";
import Email from "../images/icon/Email.svg";
import bitcoin from "../images/icon/bitcoin.svg";
import calendar from "../images/icon/calendar.svg";
import location from "../images/icon/location.svg";

class Components extends Component {

    constructor(props) {
        super(props);
        this.state = {
            col1: true,
            col2: false,
            col3: false,
            activeTab : "1"
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
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
                                            <h4 className="title"> Components </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Docs</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Components</span>
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
                            <Col lg={6}>
                                <Row>
                                    <Col lg={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Typography </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>
                                                <h1>H1. Bootstrap heading</h1>
                                                <h2>H2. Bootstrap heading</h2>
                                                <h3>H3. Bootstrap heading</h3>
                                                <h4>H4. Bootstrap heading</h4>
                                                <h5>H5. Bootstrap heading</h5>
                                                <h6>H6. Bootstrap heading</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Display Heading </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;p className="display-1"&gt; Display 1 &lt;/p&gt;</code></h6>
                                                <p className="display-1">Display 1</p>
                                                <p className="display-2">Display 2</p>
                                                <p className="display-3">Display 3</p>
                                                <p className="display-4">Display 4</p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                                <Link to="#" className="btn btn-primary mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-secondary mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-success mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-danger mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-info mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-light mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-dark mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Pill</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary rounded-pill"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-primary rounded-pill mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-secondary rounded-pill mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-success rounded-pill mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-danger rounded-pill mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-info rounded-pill mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-warning rounded-pill mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-light rounded-pill mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-dark rounded-pill mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Outline</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-outline-primary mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-outline-secondary mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-outline-success mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-outline-danger mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-outline-info mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-outline-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-outline-light mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-outline-dark mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Pill Outline</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-outline-primary rounded-pill"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-outline-primary rounded-pill mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-outline-secondary rounded-pill mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-outline-success rounded-pill mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-outline-danger rounded-pill mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-outline-info rounded-pill mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-outline-warning rounded-pill mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-outline-light rounded-pill mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-outline-dark rounded-pill mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Button Sizing</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary btn-sm"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-primary btn-sm mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-success btn-lg mb-3 mr-2">Success</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Accordions</h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="faq-content">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="card border rounded shadow mb-2">

                                                            <Link to="#collapseOne" className={ this.state.col1 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  } onClick={() => this.setState({ col1: !this.state.col1, col2 : false, col3 : false })}>
                                                                <div className="card-header bg-light p-3" id="headingOne">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #1 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col1}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>

                                                        <div className="card border rounded shadow mb-2">
                                                            <Link to="#collapseTwo" onClick={() => this.setState({ col2: !this.state.col2,col1 : false, col3 : false })} className={ this.state.col2 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  }>
                                                                <div className="card-header bg-light p-3" id="headingTwo">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #2 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col2}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>

                                                        <div className="card rounded shadow mb-0">
                                                            <Link to="#" onClick={() => this.setState({ col3: !this.state.col3,col2 : false, col1 : false })}  className={ this.state.col3 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  }>
                                                                <div className="card-header bg-light p-3" id="headingfive">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #3 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col3}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Text Color </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="text-primary"&gt; Landrick Saas & Software Template &lt;/div&gt;</code></h6>

                                                <h6 className="text-primary">.text-primary</h6>
                                                <h6 className="text-secondary">.text-secondary</h6>
                                                <h6 className="text-success">.text-success</h6>
                                                <h6 className="text-danger">.text-danger</h6>
                                                <h6 className="text-warning">.text-warning</h6>
                                                <h6 className="text-info">.text-info</h6>
                                                <h6 className="text-light bg-dark">.text-light</h6>
                                                <h6 className="text-white bg-dark">.text-white</h6>
                                                <h6 className="text-white-50 bg-dark">.text-white-50</h6>
                                                <h6 className="text-dark">.text-dark</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Avatars </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src="images/home/01.jpg" className="img-fluid avatar avatar-small mr-3 rounded-pill"&gt;</code></h6>

                                                <img src={client05} className="img-fluid avatar avatar-small mr-3 rounded-pill" alt="" />
                                                <img src={client05} className="img-fluid avatar avatar-medium mr-3 rounded-pill" alt="" />
                                                <img src={client05} className="img-fluid avatar avatar-large mr-3 rounded-pill" alt="" />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Google Map </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="map map-gray">
                                                    <iframe title="landrick" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="rounded" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Nav Tabs </h4>
                                            </div>

                                            <div className="p-4">
                                                <Row>
                                                    <Col lg={12}>

                                                        <Nav pills className="nav-justified flex-column flex-sm-row">
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                                    onClick={() => { this.toggle('1'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">Home</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>

                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                                    onClick={() => { this.toggle('2'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">About</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '3' })}
                                                                    onClick={() => { this.toggle('3'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">Service</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>
                                                        </Nav>
                                                    </Col>
                                                </Row>

                                                <Row className="pt-2">
                                                    <Col>
                                                        <TabContent activeTab={this.state.activeTab}>
                                                            <TabPane tabId="1" className="p-3">
                                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                            <TabPane tabId="2" className="p-3">
                                                            <p className="text-muted mb-0">Can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                            <TabPane tabId="3" className="p-3">
                                                            <p className="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                        </TabContent>
                                                     
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Breadcrumb </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <br /> 
                                             <code className="text-danger">&lt;div className="page-next-level"&gt; 
                                            <br /> &nbsp; &lt;ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0"&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt; &lt;Link to="index" className="text-uppercase font-weight-bold text-dark"&gt; Home &lt;/Link&gt; &lt;/li&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt; &lt;Link to="pages" className="text-uppercase font-weight-bold text-dark"&gt; Pages &lt;/Link&gt; &lt;/lt&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt;<br /> &nbsp; &nbsp; &nbsp;  &lt;span className="text-uppercase text-primary font-weight-bold"&gt;Components &lt;/span&gt; 
                                            <br /> &nbsp; &nbsp; &lt;/li&gt; 
                                            <br /> &nbsp; &lt;/ul&gt; 
                                            <br /> &lt;/div&gt;
                                            </code></h6>

                                                <div className="page-next-level">
                                                    <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0" style={{ top: "0" }}>
                                                        <li className="list-inline-item"><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                        <li className="list-inline-item"><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                        <li className="list-inline-item">
                                                            <span className="text-uppercase text-primary font-weight-bold">Components</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Pagination </h4>
                                            </div>

                                            <div className="p-4">
                                                <ul className="pagination mb-0 list-unstyled">
                                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Prev</Link></li>
                                                    <li className="active"><Link to="#" className="pr-3 pl-3 pt-2 pb-2">1</Link></li>
                                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">2</Link></li>
                                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">3</Link></li>
                                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Next</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Progressbar </h4>
                                            </div>
                                            <div className="p-4">
                                                <div className="progress-box">
                                                    <h6 className="title text-muted">WordPress</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar position-relative bg-primary" style={{ width: "84%" }}>
                                                            <div className="progress-value d-block text-muted h6">84%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-box mt-4">
                                                    <h6 className="title text-muted">PHP / MYSQL</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar position-relative bg-primary" style={{ width: "75%" }} >
                                                            <div className="progress-value d-block text-muted h6">75%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-box mt-4">
                                                    <h6 className="title text-muted">Angular / JavaScript</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar position-relative bg-primary" style={{ width: "79%" }} >
                                                            <div className="progress-value d-block text-muted h6">79%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="progress-box mt-4">
                                                    <h6 className="title text-muted">HTML</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar position-relative bg-primary" style={{ width: "95%" }} >
                                                            <div className="progress-value d-block text-muted h6">95%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;span className="badge badge-primary"&gt; primary &lt;/span&gt;</code></h6>

                                                <span className="badge badge-primary mr-2 mb-2">Primary</span>
                                                <span className="badge badge-secondary mr-2 mb-2">Secondary</span>
                                                <span className="badge badge-success mr-2 mb-2">Success</span>
                                                <span className="badge badge-danger mr-2 mb-2">Danger</span>
                                                <span className="badge badge-warning mr-2 mb-2">Warning</span>
                                                <span className="badge badge-info mr-2 mb-2">Info</span>
                                                <span className="badge badge-light mr-2 mb-2">Light</span>
                                                <span className="badge badge-dark mr-2 mb-2">Dark</span>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Pill Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;span className="badge badge-primary rounded"&gt; primary &lt;/span&gt;</code></h6>

                                                <span className="badge badge-primary rounded mr-2 mb-2">Primary</span>
                                                <span className="badge badge-secondary rounded mr-2 mb-2">Secondary</span>
                                                <span className="badge badge-success rounded mr-2 mb-2">Success</span>
                                                <span className="badge badge-danger rounded mr-2 mb-2">Danger</span>
                                                <span className="badge badge-warning rounded mr-2 mb-2">Warning</span>
                                                <span className="badge badge-info rounded mr-2 mb-2">Info</span>
                                                <span className="badge badge-light rounded mr-2 mb-2">Light</span>
                                                <span className="badge badge-dark rounded mr-2 mb-2">Dark</span>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Outline Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;span className="badge badge-outline-primary rounded"&gt; primary &lt;/span&gt;</code></h6>

                                                <span className="badge badge-outline-primary rounded mr-2 mb-2">Primary</span>
                                                <span className="badge badge-outline-secondary rounded mr-2 mb-2">Secondary</span>
                                                <span className="badge badge-outline-success rounded mr-2 mb-2">Success</span>
                                                <span className="badge badge-outline-danger rounded mr-2 mb-2">Danger</span>
                                                <span className="badge badge-outline-warning rounded mr-2 mb-2">Warning</span>
                                                <span className="badge badge-outline-info rounded mr-2 mb-2">Info</span>
                                                <span className="badge badge-outline-light rounded mr-2 mb-2">Light</span>
                                                <span className="badge badge-outline-dark rounded mr-2 mb-2">Dark</span>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Link Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="badge badge-primary"&gt; primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="badge badge-primary mr-2 mb-2">Primary</Link>
                                                <Link to="#" className="badge badge-secondary mr-2 mb-2">Secondary</Link>
                                                <Link to="#" className="badge badge-success mr-2 mb-2">Success</Link>
                                                <Link to="#" className="badge badge-danger mr-2 mb-2">Danger</Link>
                                                <Link to="#" className="badge badge-warning mr-2 mb-2">Warning</Link>
                                                <Link to="#" className="badge badge-info mr-2 mb-2">Info</Link>
                                                <Link to="#" className="badge badge-light mr-2 mb-2">Light</Link>
                                                <Link to="#" className="badge badge-dark mr-2 mb-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert—check it out! &lt;/div&gt;</code></h6>

                                                <div className="alert alert-primary" role="alert"> A simple primary alert—check it out!</div>
                                                <div className="alert alert-secondary" role="alert"> A simple secondary alert—check it out!</div>
                                                <div className="alert alert-success" role="alert"> A simple success alert—check it out!</div>
                                                <div className="alert alert-danger" role="alert"> A simple danger alert—check it out!</div>
                                                <div className="alert alert-warning" role="alert"> A simple warning alert—check it out!</div>
                                                <div className="alert alert-info" role="alert"> A simple info alert—check it out!</div>
                                                <div className="alert alert-light" role="alert"> A simple light alert—check it out!</div>
                                                <div className="alert alert-dark" role="alert"> A simple dark alert—check it out!</div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Alert Links </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-primary" role="alert"&gt; A simple primary alert with &lt;Link to="#" className="alert-link"&gt;&lt;/Link&gt;. &lt;/div&gt;</code></h6>

                                                <div className="alert alert-primary" role="alert">A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-secondary" role="alert">A simple secondary alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-success" role="alert">A simple success alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-danger" role="alert">A simple danger alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-warning" role="alert">A simple warning alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-info" role="alert">A simple info alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-light" role="alert">A simple light alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                                <div className="alert alert-dark" role="alert">A simple dark alert with <Link to="#" className="alert-link">an link</Link>.</div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Additional Content </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="alert alert-success" role="alert">
                                                    <h4 className="alert-heading">Well done!</h4>
                                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                    <hr />
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Dismissing Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="alert alert-success alert-dismissible fade show" role="alert"&gt; &lt;strong&gt;Well done!&lt;/strong&gt; You successfully read this important alert message. &lt;button type="button" className="close" data-dismiss="alert" aria-label="Close"&gt; &lt;span aria-hidden="true"&gt; &times; &lt;/span&gt; &lt;/button&gt;  &lt;/div&gt;</code></h6>

                                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                    <strong>Well done!</strong> You successfully read this important alert message.
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="alert alert-info alert-dismissible fade show" role="alert">
                                                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>Oh snap! </strong> Change a few things up and try submitting again.
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Forms </h4>
                                            </div>

                                            <div className="p-4">
                                                <form>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="form-group position-relative">
                                                                <label>Your Name <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="form-group position-relative">
                                                                <label>Your Email <span className="text-danger">*</span></label>
                                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                                <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" />
                                                            </div>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="form-group position-relative">
                                                                <label>Subject</label>
                                                                <i className="mdi mdi-book ml-3 icons"></i>
                                                                <input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :" />
                                                            </div>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="form-group position-relative">
                                                                <label>Comments</label>
                                                                <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                                <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12} className="text-center">
                                                            <input type="button" id="submit" name="send" className="btn btn-primary" value="Send Message" />
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Checkboxes </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="form-check form-check-inline">
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" htmlFor="customCheck1">One</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                            <label className="custom-control-label" htmlFor="customCheck2">Two</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" disabled id="customCheck3" />
                                                            <label className="custom-control-label" htmlFor="customCheck3">Disabled</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Radio Buttons </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <div className="form-group">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <div className="form-group">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio2">No</label>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <div className="form-group">
                                                        <input type="radio" id="customRadio3" name="customRadio" disabled className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio3">Disabled</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Switches Button </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="custom-control custom-switch">
                                                    <div className="form-group">
                                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                        <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-switch">
                                                    <div className="form-group">
                                                        <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                                                        <label className="custom-control-label" htmlFor="customSwitch2">Disabled switch element</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Subscribe Form </h4>
                                            </div>

                                            <div className="p-4">
                                                <form>
                                                    <div className="form-group">
                                                        <div className="input-group mb-3">
                                                            <input name="email" id="email2" type="email" className="form-control" placeholder="Your email :" required aria-describedby="newssubscribebtn" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary submitBnt" type="submit" id="newssubscribebtn">Subscribe</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Blockquotes </h4>
                                            </div>

                                            <div className="p-4">
                                                <blockquote className="blockquote p-3">
                                                    <p className="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Icons </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6>Material Design Icons</h6>
                                                <p className="text-muted">There are 4400+ Material Design icons and you can get all icons info from here: <Link to="//materialdesignicons.com/" target="_blank"><code className="text-primary">https://materialdesignicons.com/</code></Link></p>
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;i className="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>

                                                <i className="mdi mdi-home h4 mr-2"></i>
                                                <i className="mdi mdi-facebook h4 mr-2"></i>
                                                <i className="mdi mdi-chevron-tight h4 mr-2"></i>
                                                <i className="mdi mdi-camera-image h4 mr-2"></i>
                                                <i className="mdi mdi-car-light-high h4 mr-2"></i>
                                                <i className="mdi mdi-silverware-fork-knife h4 mr-2"></i>

                                                <h6 className="mt-4">Flaticon Icons</h6>
                                                <p><Link to="//www.flaticon.com/packs/basic-icon" target="_blank"><code className="text-primary">https://www.flaticon.com/packs/basic-icon</code></Link></p>

                                                <img src={Email} height="50" className="mr-3" alt="" />
                                                <img src={bitcoin} height="50" className="mr-3" alt="" />
                                                <img src={calendar} height="50" className="mr-3" alt="" />
                                                <img src={location} height="50" className="mr-3" alt="" />

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default Components;
