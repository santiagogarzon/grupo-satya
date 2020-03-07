// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import maintenanceImg from '../images/maintenance.jpg';


//CountDown
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return <React.Fragment>
            <div id="clock" className="mb-4 overflow-hidden text-center">
                <p className="mb-0 ml-3 mr-3 d-inline-block">
                    <span id="hours" className="d-block position-relative">{hours}</span>
                    <span className="indicator position-relative d-block">Hours</span>
                </p>
                <p className="mb-0 ml-3 mr-3 d-inline-block mt-sm-30">
                    <span id="minutes" className="d-block position-relative">{minutes}</span>
                    <span className="indicator position-relative d-block">Minutes</span>
                </p>
                <p className="mb-0 ml-3 mr-3 d-inline-block mt-sm-30">
                    <span id="seconds" className="d-block position-relative">{seconds}</span>
                    <span className="indicator position-relative d-block">Seconds</span>
                </p>
            </div>
        </React.Fragment>
    }
};


class PageMaintenance extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function() {   document.getElementById("pageLoader").style.display = "none";   }, 1000);
    }

    
    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>

                <section className="bg-home" style={{ backgroundImage: `url(${maintenanceImg})` }}>
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={8} md={12} className="text-center">
                                        <Link to="#" className="text-white logo h5">Landrick<span className="text-primary">.</span></Link>
                                        <div className="text-uppercase text-white mt-2 mb-4 maintenance">System Is Under Maintenance</div>
                                        <p className="text-light">Perfect and awesome template to present your future product or service. Hooking audience attention is all in the opener.</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} className="text-center">
                                        <div className="text-center">

                                            <Countdown
                                                date={Date.now() + 1199658655000}
                                                renderer={renderer}
                                            />

                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} className="text-center">
                                        <Link to="/index" className="btn btn-primary mt-4"><i className="mdi mdi-backup-restore"></i> Go Back Home</Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageMaintenance;