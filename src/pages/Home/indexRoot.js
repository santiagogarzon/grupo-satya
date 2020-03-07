// React basic and bootstrap
import React, { Component } from 'react';

// Scroll up button
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

// Import css
import './css/demo.css';

// Import sub components
import Home from './Home';
import Demo from './Demo';
import Feature from './Feature';
import Footer from './Footer';

class IndexRoot extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function () { document.getElementById("pageLoader").style.display = "none"; }, 1000);
    }


    render() {
        return (
            <React.Fragment>

                <Home />
                <Demo />
                <Feature />
                <Footer />

                <ScrollUpButton ContainerClassName="back-to-top rounded text-center"  />

                {/* <div id="bottomIcon">
                    <ScrollUpButton style={{ backgroundColor: "#bfbfbf", color: "#3c4858", borderRadius: "8px", width: "30px", height: "30px" }} />
                </div> */}


            </React.Fragment>
        );
    }
}

export default IndexRoot;




