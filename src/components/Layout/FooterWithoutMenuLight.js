import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
 
// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class FooterWithoutMenuLight extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer bg-light footer-bar text-dark">
            <div className="container text-center">
                <Row className="align-items-center">
                    <Col sm={6}>
                        <div className="text-sm-left">
                            <p className="mb-0">©  {new Date().getFullYear()} Landrick. Develop by Themesbrand.</p>
                        </div>
                    </Col>
                    <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled payment-cards text-sm-right mb-0">
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={americanEx} title="American Express" alt="" /></Link></li>
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={discover} title="Discover" alt="" /></Link></li>
                            <li className="list-inline-item  mr-1"><Link to="#"><img src={masterCard} title="Master Card" alt="" /></Link></li>
                            <li className="list-inline-item mr-1"><Link to="#"><img src={paypal} title="Paypal" alt="" /></Link></li>
                            <li className="list-inline-item"><Link to="#"><img src={visa} title="Visa" alt="" /></Link></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default FooterWithoutMenuLight;
