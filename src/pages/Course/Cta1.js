// React Basic and Bootstrap
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Row, Col, Alert } from 'reactstrap';

// import images
import bg03 from '../../images/course/bg03.jpg';

class Cta1 extends Component {

  
    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    } 

    render() {
        return (
            <React.Fragment>
                <section className="section" style={{ background: `url(${bg03})` }} id="admission">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={8} md={7} className="col-12">
                                <div className="section-title">
                                    <h4 className="main-title text-white mb-4">Admission Now</h4>
                                    <p className="para-desc mb-0 text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                </div>
                                <Row id="counter">
                                    <Col md={3} className="col-6 mt-4 pt-2">
                                        <div className="counter-box">
                                            <i className="mdi mdi-school text-light h1"></i>
                                            <h2 className="mb-0 text-white mt-2"><span className="counter-value" data-count="25"><CountUp duration={5} end={25} /></span>K</h2>
                                            <h6 className="counter-head text-light">Students</h6>
                                        </div>
                                    </Col>

                                    <Col md={3} className="col-6 mt-4 pt-2">
                                        <div className="counter-box">
                                            <i className="mdi mdi-book-open-variant text-light h1"></i>
                                            <h2 className="mb-0 text-white mt-2"><span className="counter-value" data-count="70"><CountUp duration={5} end={70} /></span>+</h2>
                                            <h6 className="counter-head text-light">Courses</h6>
                                        </div>
                                    </Col>

                                    <Col md={3} className="col-6 mt-4 pt-2">
                                        <div className="counter-box">
                                            <i className="mdi mdi-account text-light h1"></i>
                                            <h2 className="mb-0 text-white mt-2"><span className="counter-value" data-count="55"><CountUp duration={5} end={55} /></span>+</h2>
                                            <h6 className="counter-head text-light">Instructors</h6>
                                        </div>
                                    </Col>

                                    <Col md={3} className="col-6 mt-4 pt-2">
                                        <div className="counter-box">
                                            <i className="mdi mdi-language-swift text-light h1"></i>
                                            <h2 className="mb-0 text-white mt-2"><span className="counter-value" data-count="25"><CountUp duration={5} end={25} /></span>+</h2>
                                            <h6 className="counter-head text-light">Languages</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={4} md={5} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                           Data Sended successfully.
                                         </Alert>
                                <form  className="p-4 rounded bg-white" onSubmit={this.handleSubmit}>
                                    <h4>7 Days Free Trial</h4>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="form-group position-relative">
                                                <label>Name : <span className="text-danger">*</span></label>
                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                <input type="text" className="form-control pl-5" placeholder="Name" name="name" required />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group position-relative">
                                                <label>Email : <span className="text-danger">*</span></label>
                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                <input type="email" className="form-control pl-5" placeholder="Email" name="email" required />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group position-relative">
                                                <label>Phone : <span className="text-danger">*</span></label>
                                                <i className="mdi mdi-phone ml-3 icons"></i>
                                                <input type="number" id="number" className="form-control pl-5" placeholder="phone" required />
                                            </div>
                                        </Col>

                                        <Col lg={12} className="mt-2 mb-0">
                                            <button  type="submit" className="btn btn-primary w-100">Register Now</button>
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

export default Cta1;