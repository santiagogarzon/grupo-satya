// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// import images
import blog01 from '../images/blog/01.jpg';
import blog03 from '../images/blog/03.jpg';
import blog04 from '../images/blog/04.jpg';
import blog07 from '../images/blog/07.jpg';
import blog08 from '../images/blog/08.jpg';

// Client Images
import client1 from '../images/client/01.jpg';
import client2 from '../images/client/02.jpg';
import client3 from '../images/client/03.jpg';
import client4 from '../images/client/04.jpg';


class PageBlogDetail extends Component {

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
                                            <h2> Design your apps in your own way </h2>
                                            <ul className="list-unstyled mt-4">
                                                <li className="list-inline-item h6 user text-muted mr-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                                                <li className="list-inline-item h6 date text-muted"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</li>
                                            </ul>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                <li><Link to="#" className="text-uppercase font-weight-bold text-dark">Blog</Link></li>
                                                <li>
                                                    <span className="text-uppercase text-primary font-weight-bold">Blog Detail</span>
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
                            <Col lg={8} md={7}>
                                <div className="mr-lg-3">
                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                        <div className="position-relative">
                                            <img src={blog01} className="img-fluid rounded-top" alt="" />
                                        </div>
                                        <div className="content p-4">
                                            <h6><i className="mdi mdi-tag text-primary mr-1"></i><Link to="#" className="text-primary">Software</Link>, <Link to="#" className="text-primary">Application</Link></h6>
                                            <p className="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                                            <blockquote className="blockquote mt-3 p-3">
                                                <p className="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                            </blockquote>
                                            <p className="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                            <div className="post-meta mt-3">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 shadow rounded mt-4 pt-2">
                                        <h4 className="page-title pb-3">Comments :</h4>
                                        <ul className="media-list list-unstyled mb-0">
                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client1} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Lorenzo Peterson</Link></h4>
                                                        <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>
                                            </li>

                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client2} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                        <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>
                                            </li>

                                            <li className="comment-desk mt-4">
                                                <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                <div className="commentor">
                                                    <Link className="float-left pr-3" to="#">
                                                        <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client3} alt="img" />
                                                    </Link>
                                                    <div className="overflow-hidden d-block">
                                                        <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                        <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                </div>

                                                <ul className="pl-4 pl-md-5 list-unstyled sub-comment">
                                                    <li className="comment-desk mt-4">
                                                        <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                        <div className="commentor">
                                                            <Link className="float-left pr-3" to="#">
                                                                <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client4} alt="img" />
                                                            </Link>
                                                            <div className="overflow-hidden d-block">
                                                                <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Calvin Camacho</Link></h4>
                                                                <small className="text-muted">16th August, 2019 at 05:55 pm</small>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </li>

                                                    <li className="comment-desk mt-4">
                                                        <Link to="#" className="float-right text-muted"><i className="mdi mdi-reply"></i>&nbsp; Reply</Link>
                                                        <div className="commentor">
                                                            <Link className="float-left pr-3" to="#">
                                                                <img className="d-block mx-auto shadow rounded-circle img-fluid" src={client2} alt="img" />
                                                            </Link>
                                                            <div className="overflow-hidden d-block">
                                                                <h4 className="media-heading mb-0"><Link to="#" className="text-dark">Tammy Camacho</Link></h4>
                                                                <small className="text-muted">17th August, 2019 at 05:44 pm</small>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 pt-2 p-4 shadow rounded">
                                        <h4 className="page-title">Related Posts :</h4>

                                        <Row>
                                            <Col lg={6} className="mt-4 pt-2">
                                                <div className="blog position-relative overflow-hidden shadow rounded bg-light">
                                                    <div className="position-relative">
                                                        <img src={blog03} className="img-fluid rounded-top" alt="" />
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

                                            <Col lg={6} className="mt-4 pt-2">
                                                <div className="blog position-relative overflow-hidden shadow rounded bg-light">
                                                    <div className="position-relative">
                                                        <img src={blog04} className="img-fluid rounded-top" alt="" />
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
                                        </Row>
                                    </div>

                                    <div className="mt-4 pt-2 p-4 shadow rounded">
                                        <h4 className="page-title pb-3">Leave A Comment :</h4>
                                        <form>
                                            <Row>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <label>Your Comment</label>
                                                        <i className="mdi mdi-comment-outline ml-3 icons"></i>
                                                        <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control pl-5" required=""></textarea>
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div className="form-group position-relative">
                                                        <label>Name <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control pl-5" required="" />
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div className="form-group position-relative">
                                                        <label>Your Email <span className="text-danger">*</span></label>
                                                        <i className="mdi mdi-email ml-3 icons"></i>
                                                        <input id="email" type="email" placeholder="Email" name="email" className="form-control pl-5" required="" />
                                                    </div>
                                                </Col>

                                                <Col md={12}>
                                                    <div className="send">
                                                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} md={5} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
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
                                                <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={blog08} className="img-fluid rounded" /></Link></div>
                                                <div className="post-recent-content float-left"><Link to="#">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                            </div>
                                            <div className="clearfix post-recent">
                                                <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={blog01} className="img-fluid rounded" /></Link></div>
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
                                            <li className="list-inline-item"><Link to="#" className="rounded  mr-1"><i className="mdi mdi-facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-vimeo"></i></Link></li>
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
export default PageBlogDetail;
