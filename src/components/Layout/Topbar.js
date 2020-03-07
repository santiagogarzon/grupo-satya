import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import logo from "../../images/satyaLogo2.png";


class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen : false, 
            page : false, 
            landing : false,
            docs : false,
            new :false,
            utility : false,
            user : false,
            work : false,
            blog : false,
            carr : false };
        this.toggleLine = this.toggleLine.bind(this);
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }

    componentDidMount() {
         var matchingMenuItem = null;
         var ul = document.getElementById("top-menu");
         var items = ul.getElementsByTagName("a");
         for (var i = 0; i < items.length; ++i) {
             if (this.props.location.pathname === items[i].pathname) {
                 matchingMenuItem = items[i];
                 break;
             }
         }
         if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
         }
     }
 
     activateParentDropdown = (item) => {
          const parent = item.parentElement;
          if (parent) {
              parent.classList.add('active'); // li
              const parent1 = parent.parentElement;
              parent1.classList.add('active'); // li
              if (parent1) {
                  const parent2 = parent1.parentElement;
                  parent2.classList.add('active'); // li
                  if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add('active'); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add('active'); // li
                 }
             }
         }
     }
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <div className="container">
                        <div>
                            <Link className="logo" to="/index"><img className="satya-logo" src={logo}/></Link>
                        </div>
                        <div className="buy-button">
                            <Link to="#" className="btn btn-primary">Iniciar Reclamo</Link>
                        </div>
                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu" id="top-menu">
                                <li><Link to="/index">Home</Link></li>
                                <li className="has-submenu">
                                    <Link  to="/#" onClick={(event) => {  event.preventDefault();  this.setState({ landing : !this.state.landing }) } }>Servicios</Link>
                                    <span className="menu-arrow"></span>
                                    <ul  className={ this.state.landing ? "submenu megamenu open" : "submenu megamenu" }  >
                                        <li>
                                            <ul>
                                                <li><Link to="/index-saas">Saas</Link></li>
                                                <li><Link to="/index-agency">Agency</Link></li>
                                                <li><Link to="/index-apps">Application</Link></li>
                                                <li><Link to="/index-studio">Studio</Link></li>
                                                <li><Link to="/index-business">Business</Link></li>
                                                <li><Link to="/index-modern-business">Modern Business</Link></li>
                                                <li><Link to="/index-hotel">Hotel</Link></li>
                                                <li><Link to="/index-marketing">Marketing</Link></li>
                                                <li><Link to="/index-enterprise">Enterprise </Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><Link to="/index-coworking">Coworking</Link></li>
                                                <li><Link to="/index-cloud-hosting">Cloud Hosting</Link></li>
                                                <li><Link to="/index-event">Event</Link></li>
                                                <li><Link to="/index-course">Course </Link></li>
                                                <li><Link to="/index-personal">Personal </Link></li>
                                                <li><Link to="/index-single">Product </Link></li>
                                                <li><Link to="/index-portfolio">Portfolio </Link></li>
                                                <li><Link to="/index-services">Service </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/#" onClick={(event) => {  event.preventDefault();  this.setState({ page : !this.state.page })} }>FAQS</Link><span className="menu-arrow"></span>
                                    <ul  className={ this.state.page ? "submenu open" : "submenu" }>
                                        <li><Link to="/page-aboutus"> About Us</Link></li>
                                        <li><Link to="/page-services">Services</Link></li>
                                        <li><Link to="/page-pricing">Pricing</Link></li>
                                        <li><Link to="/page-team"> Team</Link></li>
                                        <li className="has-submenu">
                                            <Link to="/#" onClick={(event) => {  event.preventDefault(); this.setState({ carr : !this.state.carr })} }> Careers</Link><span className="submenu-arrow"></span>
                                            <ul  className={ this.state.carr ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-job">Jobs</Link></li>
                                                <li><Link to="/page-job-detail">Job Detail</Link></li>
                                                <li><Link to="/page-job-apply">Job Apply</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="/#"  onClick={(event) => {  event.preventDefault(); this.setState({ blog : !this.state.blog })} }> Blog</Link><span className="submenu-arrow"></span>
                                            <ul className={ this.state.blog ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-blog">Blog Grid</Link></li>
                                                <li><Link to="/page-blog-sidebar">Blog with Sidebar</Link></li>
                                                <li><Link to="/page-blog-detail">Blog Detail</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="/#"  onClick={(event) => {  event.preventDefault();  this.setState({ work : !this.state.work })} }> Works</Link><span className="submenu-arrow"></span>
                                            <ul className={ this.state.work ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-work">Works Grid</Link></li>
                                                <li><Link to="/page-work-detail">Work Detail</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="/#" onClick={(event) => {  event.preventDefault();this.setState({ user : !this.state.user })} }> User </Link><span className="submenu-arrow"></span>
                                            <ul className={ this.state.user ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-login">Login</Link></li>
                                                <li><Link to="/page-signup">Signup</Link></li>
                                                <li><Link to="/page-recovery-password">Recovery Passward</Link></li>
                                                <li><Link to="/page-cover-login">Login 2</Link></li>
                                                <li><Link to="/page-cover-signup">Signup 2</Link></li>
                                                <li><Link to="/page-cover-re-password">Recovery Passward 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="/#" onClick={(event) => {  event.preventDefault(); this.setState({ utility : !this.state.utility })} }> Utility </Link><span className="submenu-arrow"></span>
                                            <ul className={ this.state.utility ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-comingsoon">Coming Soon</Link></li>
                                                <li><Link to="/page-maintenance">Maintenance</Link></li>
                                                <li><Link to="/page-error">Error</Link></li>
                                                <li><Link to="/page-terms">Terms of Services</Link></li>
                                                <li><Link to="/page-privacy">Privacy Policy</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="/#" onClick={(event) => {  event.preventDefault(); this.setState({ new : !this.state.new }) } }> Contact  </Link><span className="submenu-arrow"></span>
                                            <ul className={ this.state.new ? "submenu open" : "submenu" }>
                                                <li><Link to="/page-contact-detail">Contact Detail </Link></li>
                                                <li><Link to="/page-contact-one">Contact One</Link></li>
                                                <li><Link to="/page-contact-two">Contact Two</Link></li>
                                                <li><Link to="/page-contact-three">Contact Three </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/#" onClick={(event) => {  event.preventDefault(); this.setState({ docs : !this.state.docs })} } >Contacto</Link><span className="menu-arrow"></span>
                                    <ul  className={ this.state.docs ? "submenu open" : "submenu" }>
                                        <li><Link to="/documentation">Documentation </Link></li>
                                        <li><Link to="/changelog">Changelog</Link></li>
                                        <li><Link to="/components">Components</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);