// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import about from '../../images/coworking/about.jpg';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={5} md={6} className="col-12">
                                <img src={about} className="img-fluid rounded" alt="" />
                            </Col>

                            <Col lg={7} md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">About Our Community</h4>
                                    <p className="text-muted">Start working with <span className="text-primary font-weight-bold">Landrick Space</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <Link to="#" className="btn btn-primary mt-3">Join now</Link>
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