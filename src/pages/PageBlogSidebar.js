// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import blog01 from '../images/blog/01.jpg';
import blog02 from '../images/blog/02.jpg';
import blog03 from '../images/blog/03.jpg';
import blog04 from '../images/blog/04.jpg';
import blog05 from '../images/blog/05.jpg';
import blog06 from '../images/blog/06.jpg';
import blog07 from '../images/blog/07.jpg';
import blog08 from '../images/blog/08.jpg';

class PageBlogSidebar extends Component {

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
                                    <h4 className="title"> Blog </h4>
                                    <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                        <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                        <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li> 
                                        <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Blog</Link></li> 
                                        <li>
                                            <span className="text-uppercase text-primary font-weight-bold">Blog with Sidebar</span> 
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
                <Row>
             
                    <Col lg={8} md={6}>
                        <div className="row mr-lg-2">
                            <Col lg={6}  className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog01} className="img-fluid rounded-top" alt="" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Design your apps in your own way</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col lg={6}  className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog02} className="img-fluid rounded-top" alt="test" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">How apps is changing the IT world</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog03} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Smartest Applications for Business</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog04} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Design your apps in your own way</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog05} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">How apps is changing the IT world</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-4 pb-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog06} className="img-fluid rounded-top" alt="Landrick" />
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Smartest Applications for Business</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>
                            <Col>                                
                                <ul className="pagination justify-content-center mb-0 list-unstyled">
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Prev</Link></li>
                                    <li className="active"><Link to="#" className="pr-3 pl-3 pt-2 pb-2">1</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">2</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">3</Link></li>
                                    <li><Link to="#" className="pr-3 pl-3 pt-2 pb-2">Next</Link></li>
                                </ul>
                            </Col>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="sidebar mt-sm-30 p-4 rounded shadow">
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Search</h4>
                                <div id="search2" className="widget-search mt-4 mb-0">
                                    <form role="search" method="get" id="searchform" className="searchform">
                                        <div>
                                            <input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..." />
                                            <input type="submit" id="searchsubmit" value="Search" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Catagories</h4>
                                <ul className="list-unstyled mt-4 mb-0 catagories">
                                    <li><Link to="#">Finance</Link> <span className="float-right">13</span></li>
                                    <li><Link to="#">Business</Link> <span className="float-right">09</span></li>
                                    <li><Link to="#">Blog</Link> <span className="float-right">18</span></li>
                                    <li><Link to="#">Corporate</Link> <span className="float-right">20</span></li>
                                    <li><Link to="#">Investment</Link> <span className="float-right">22</span></li>
                                </ul>
                            </div>
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Recent Post</h4>
                                <div className="mt-4">
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={blog07} className="img-fluid rounded" /></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={blog08}  className="img-fluid rounded" /></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={blog01}  className="img-fluid rounded" /></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Tags Cloud</h4>
                                <div className="tagcloud mt-4">
									<Link to="#" className="rounded">Business</Link>
									<Link to="#" className="rounded">Finance</Link>
									<Link to="#" className="rounded">Marketing</Link>
									<Link to="#" className="rounded">Fashion</Link>
                                    <Link to="#" className="rounded">Bride</Link>
                                    <Link to="#" className="rounded">Lifestyle</Link>
                                    <Link to="#" className="rounded">Travel</Link>
                                    <Link to="#" className="rounded">Beauty</Link>
                                    <Link to="#" className="rounded">Video</Link>
                                    <Link to="#" className="rounded">Audio</Link>
								</div>
                            </div>
                            <div className="widget">
                                <h4 className="widget-title">Follow us</h4>
                                <ul className="list-unstyled social-icon mt-4 mb-0">
                                    <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook"></i></Link></li>
                                    <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-instagram"></i></Link></li>
                                    <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-twitter"></i></Link></li>
                                    <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-vimeo"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-dribbble"></i></Link></li>
                                </ul>
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
export default PageBlogSidebar;
