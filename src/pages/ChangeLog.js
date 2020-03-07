// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';


class ChangeLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
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
                                            <h4 className="title"> Changelog </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Docs</Link></li>
                                                <li><span className="text-uppercase text-primary font-weight-bold">Changelog</span>
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
                            <Col lg={9}>
                                <div className="p-4 shadow rounded border">
                               
                                    <h5>Version <span className="text-success">1.0.0</span> - 14th November 2019</h5>
                                    <ul className="list-unstyled">
                                        <li className="text-muted ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Initial Released</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to="//1.envato.market/4n73n" target="_blank" className="btn btn-primary">Purchase Now</Link>
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

export default ChangeLog;
