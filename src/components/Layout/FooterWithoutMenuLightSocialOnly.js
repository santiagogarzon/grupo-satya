import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterWithoutMenuLightSocialOnly extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <footer className="footer footer-bar bg-light">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0 text-dark">© {new Date().getFullYear()} Landrick. Develop by Themesbrand.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-skype" title="SKYPE"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded text-dark"><i className="mdi mdi-google-plus" title="GOOGLE +"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterWithoutMenuLightSocialOnly;
