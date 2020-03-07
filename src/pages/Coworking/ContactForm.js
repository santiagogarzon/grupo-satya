// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';

//import images
import bg04 from '../../images/coworking/bg04.jpg';

class ContactForm extends Component {

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
                <section className="section" style={{ background: `url(${bg04}) center center` }}>
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={8} md={7}>
                                <div className="section-title mr-lg-4">
                                    <h4 className="main-title text-light mb-4">We are Built for Business – Explore Us Today !</h4>
                                    <p className="text-light para-desc mb-0">Start working with <span className="text-success font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="bg-white rounded p-4 shadow">
                                    <h5 className="text-capitalize text-center">Become A Member</h5>
                                    <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Data sended successfully.
                                         </Alert>
                                    <form onSubmit={this.handleSubmit}>
                                        <Row className="mt-4">
                                            <Col lg={12}>
                                                <div className="form-group mb-3">
                                                    <label>Your Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name3" type="text" className="form-control" placeholder="Name" required />
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div className="form-group mb-3">
                                                    <label>Your Email <span className="text-danger">*</span></label>
                                                    <input type="email" id="email3" className="form-control" placeholder="Email" name="email" required />
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div className="form-group">
                                                    <label>Your Phone no. :<span className="text-danger">*</span></label>
                                                    <input name="number" id="number" type="number" className="form-control" placeholder="phone no. :" required />
                                                </div>
                                            </Col>

                                            <Col lg={12} className="mb-0">
                                                <button className="btn btn-primary btn-block">Started now</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ContactForm;