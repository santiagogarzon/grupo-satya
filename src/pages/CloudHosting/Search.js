// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-two bg-light">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={10}>
                                <form className="p-4 shadow bg-white rounded">
                                    <h4 className="mb-3">Search Your Domain Now</h4>
                                    <Row>
                                        <Col>
                                            <div className="input-group form-group mb-0">
                                                <input name="name" id="name" type="text" className="form-control rounded-left" placeholder="Your domain name :" />
                                                <div className="input-group-append" id="button-addon4">
                                                    <select className="form-control rounded-0" id="domain_list">
                                                        <option>.in</option>
                                                        <option>.com</option>
                                                        <option>.org</option>
                                                        <option>.net</option>
                                                        <option>.info</option>
                                                        <option>.me</option>
                                                    </select>
                                                    <input type="button" id="search" name="search" className="searchbtn btn btn-primary btn-block" value="Search" />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.in <br /><span className="text-primary">$4.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.com <br /><span className="text-primary">$5.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.org <br /><span className="text-primary">$6.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.net <br /><span className="text-primary">$7.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>


                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.info <br /><span className="text-primary">$3.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col lg={2} md={4} className="col-6 mt-4">
                                            <Link to="#" className="text-dark">
                                                <div className="rounded shadow bg-white p-1 text-center">
                                                    <h6 className="mb-0">.me <br /><span className="text-primary">$2.99</span>/year</h6>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Search;