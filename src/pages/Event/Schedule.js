// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Schedule extends Component {

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
                <section className="section">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Event Schedules</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col lg={8} md={12} className="text-center" style={{ marginTop : "32px" }}>

                                <Nav pills>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >     
                                          <div className="text-center pt-1 pb-1" style={{ minWidth : "200px" }}>
                                                <h4 className="title font-weight-normal mb-0">First Day</h4>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }} >
                                            <div className="text-center pt-1 pb-1" style={{ minWidth : "200px" }}>
                                                <h4 className="title font-weight-normal mb-0">Second Day</h4>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '3' })}
                                            onClick={() => { this.toggle('3'); }} >
                                            <div className="text-center pt-1 pb-1" style={{ minWidth : "200px" }}>
                                                <h4 className="title font-weight-normal mb-0">Third Day</h4>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="tab-content" id="pills-tabContent">
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">11</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Digital Conference Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 3, Sinchang-dong, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 10:30AM to 11:15AM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">11</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Conference On User Interface</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 3, Sinchang-dong, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 11:15AM to 12:30PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">11</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business World Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 3, Sinchang-dong, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 12:30PM to 01:00PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">11</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business Conference for professional</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 3, Sinchang-dong, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 01:00PM to 02:15PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">12</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Digital Conference Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 1, Seo-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 10:30AM to 11:15AM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">12</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Conference On User Interface</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 1, Seo-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 11:15AM to 12:30PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">12</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business World Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 1, Seo-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 12:30PM to 01:00PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">12</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business Conference for professional</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 1, Seo-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 01:00PM to 02:15PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">13</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Digital Conference Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 4, Gwangsan-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 10:30AM to 11:15AM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">13</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Conference On User Interface</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 4, Gwangsan-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 11:15AM to 12:30PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">13</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business World Event Intro</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 4, Gwangsan-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 12:30PM to 01:00PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={6} className="mt-4 pt-2">
                                                    <div className="event-schedule d-flex bg-white rounded p-3 border">
                                                        <div className="float-left">
                                                            <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                                                <li className="day font-weight-bold mb-2">13</li>
                                                                <li className="month font-weight-bold">OCT</li>
                                                            </ul>
                                                        </div>
                                                        <div className="content">
                                                            <h4><Link to="#" className="text-dark title">Business Conference for professional</Link></h4>
                                                            <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 4, Gwangsan-gu, Kwangju, <span className="text-danger">South Korea</span> <br /> <span className="text-dark h6">Time:</span> 01:00PM to 02:15PM</p>
                                                            <Link to="#tickets" className="btn btn-sm btn-primary-outline mouse-down">Buy Ticket</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Schedule;