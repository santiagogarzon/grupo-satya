// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';

class PageJobApply extends Component {

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

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
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
                                            <h4 className="title"> Job Apply Form </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="ml-1 text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li><Link to="#" className="ml-1 text-uppercase font-weight-bold text-dark">Careers</Link></li>
                                                <li>
                                                    <span className="ml-1 text-uppercase text-primary font-weight-bold">Job Apply</span>
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
                        <Row className="justify-content-center">
                            <Col lg={10} md={7}>
                                <div className="custom-form">
                                <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                    <form onSubmit={this.handleSubmit} className="rounded shadow p-4">
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Name :<span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Email :<span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Phone no. :<span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-phone ml-3 icons"></i>
                                                    <input name="number" id="number" type="number" className="form-control pl-5" placeholder="Your phone no. :" required/>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Job Title :</label>
                                                    <i className="mdi mdi-book ml-3 icons"></i>
                                                    <input name="subject" id="subject" className="form-control pl-5" placeholder="Title :" required />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <label>Types of jobs :</label>
                                                    <select className="form-control" id="Sortbylist-Shop">
                                                        <option>All Jobs</option>
                                                        <option>Full Time</option>
                                                        <option>Half Time</option>
                                                        <option>Remote</option>
                                                        <option>In Office</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-group position-relative">
                                                    <label>Description :</label>
                                                    <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Describe the job :"></textarea>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-group position-relative">
                                                    <label>Upload Your Cv / Resume :</label>
                                                    <input type="file" className="form-control-file" id="fileupload" />
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-control-label">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Apply Now" />
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
export default PageJobApply;
