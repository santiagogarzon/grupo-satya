// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

//import images
import wifi from '../../images/icon/wifi.svg';
import printer from '../../images/icon/printer.svg';
import servingDish from '../../images/icon/serving-dish.svg';
import hours24 from '../../images/icon/24-hours.svg';
import calendarB from '../../images/icon/calendar_b.svg';
import mail from '../../images/icon/mail.svg';
import question from '../../images/icon/question.svg';
import coffee_cup from '../../images/icon/coffee-cup.svg';

class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="main-title mb-4">Your Comfort is Our Priority</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={wifi} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Fast Internet</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={printer} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Printer & Fax</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={servingDish} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Modern Kitchen</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={hours24} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">24 Hr Access</h4>
                                    </div>
                                </div>
                            </Col>

                         <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={mail} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Mail Service</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={calendarB} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Events Space</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={question} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Conference Rooms</h4>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} md={4} className="col-6 mt-4 pt-2">
                                <div className="features text-center pt-3 pb-3">
                                    <img src={coffee_cup} height="50" alt="" />
                                    <div className="content mt-3">
                                        <h4 className="title-2">Organic Tea & Coffee</h4>
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

export default Service;