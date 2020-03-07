// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import about from '../../images/course/about.jpg';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={5} md={6} className="col-12">
                                <img src={about} className="img-fluid shadow rounded" alt="" />
                            </Col>
                            <Col lg={7} md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Our Story : <span className="text-primary">Landrick Education</span></h4>
                                    <p className="text-muted">Start Course with <span className="text-primary font-weight-bold">Landrick Education</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <ul className="list-unstyled feature-list mb-0 text-muted">
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-chevron-right text-success mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <Link to="#" className="btn btn-outline-primary mt-3">Admission Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;