// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row } from 'reactstrap';

// Import Generic components
import Feature from './Feature';
import About from './About';
import Cta from './Cta';
import Cta1 from './Cta1';
import Services from './Services';
import Testi from './Testi';
import Partner from '../../components/Shared/Partner';
import Home from './Home';



class Index extends Component {

  

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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

                {/* <div id="preloader">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div> */}

                {/* Hero Start */}
                 <Home />

                {/* Feature */}
                <Feature />

                {/* About */}
                <About />

                {/* Cta */}
                <Cta />

                {/* Services */}
                <Services />

                {/* Cta1 */}
                <Cta1 />

                {/* Testi */}
                <Testi />

                {/* Partner */}
                <section className="bg-light section-two">
                    <div className="container">
                        <Row className="justify-content-center">
                        <Partner />
                        </Row>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default Index;
