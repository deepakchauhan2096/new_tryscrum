import React, { Component } from "react";
import { Link } from "gatsby";
import { isMobile } from "react-device-detect";

// Original logo
import logo from "../assets/images/logo-dark.png";
import '../assets/css/bundlecourse.css'

// aniversary logo 1
// import logo from "../assets/images/anniversary-logo.png";

// aniversary logo 2
// import logo from "../assets/images/anniversary-logo2-02.png";


import psm from "../assets/images/psm.png";
import psm2 from "../assets/images/psm2.png";
import apk from "../assets/images/apk.png";
import calo from "../assets/images/cal-o.png";
import cale from "../assets/images/cal-e.png";
import csm from "../assets/images/csm.png";
import icpacc from "../assets/images/icp-acc.png";
import icpcat from "../assets/images/icp-cat.png";
import icpent from "../assets/images/icp-ent.png";
import pale from "../assets/images/pal-e.png";
import psk from "../assets/images/psk.png";
import pspo2 from "../assets/images/pspo-2.png";
import pspo from "../assets/images/pspo.png";
import sps from "../assets/images/sps.png";
import cspo from "../assets/images/cspo.png";
import psu from "../assets/images/psu.png";
import caleot from "../assets/images/CAL-EOT.png";
import palebm from "../assets/images/pal-ebm.png";
import amp from "../assets/images/amp.png";
import calt from "../assets/images/cal-t.png";
import icppdm from "../assets/images/icp-pdm.png";
import icpbaf from "../assets/images/icp-baf.png";
import pmi from "../assets/images/pmi.png";
import tryscrumlogo from "../assets/images/tryscrum.png";
import aps from "../assets/images/aps_icon.png";
import apssd from "../assets/images/aps-software_icon.png";
import userstory from "../assets/images/userstory.png";
import psfs from "../assets/images/psfs.png";
// import { PointOfSaleSharp } from "@mui/icons-material";

class NavTwo extends Component {

  constructor() {
    super();
    this.state = {
      sticky: false,
      mobileDisplay: false
    };
  }

  componentDidMount() {

    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("resize", this.handleSize())

    //Mobile Menu
    this.mobileMenu();
    if (isMobile) {
      this.setState({ mobileDisplay: true });
    }

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // handleSize = () => {
  //   var newWidth = window.innerWidth;
  //   var newHeight = window.innerHeight;

  //   console.log("new width is", newWidth);

  //   if (newWidth <= 550) {
  //     this.setState({sticky:false});
  //     console.log("stickey called");
  //   }else{
  //     this.setState({sticky:true});
  //   }
  // }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };


  render() {

    if (this.state.mobileDisplay) { //for mobileDisplay header non-sticky.
      return (
        <header className="site-header site-header__header-two ">


          {/*Desktop Nav start */}

          <nav
            className={`navbar navbar-expand-lg navbar-light header-navigation `}
          >
            <div className="container clearfix">
              <div className="logo-box clearfix">
                <Link to="/" className="navbar-brand">

                  <img
                    src={logo}
                    className="main-logo"
                    width="250"
                    alt="Awesome alter text"
                  />

                </Link>
                <button className="menu-toggler" data-target=".main-navigation">
                  <span className="kipso-icon-menu"></span>
                </button>
              </div>

              <div className="main-navigation">
                <ul className="navigation-box">

                  {/* <li className="current"> */}
                  <li>
                    <a className="firstmenu" href="#">Offerings</a>
                    <ul className="sub-menu">

                      <li>
                        <Link to="/corporate-training">Corporate Training</Link>
                      </li>
                      <li>
                        <Link to="/agile-coaching">Coaching</Link>
                      </li>
                      <li>
                        <Link to="/enterprise-coaching-consulting">Management Consulting</Link>
                      </li>


                    </ul>
                  </li>


                  {/* courses link only show on small screen size*/}
                  <li className="hideonfull">
                    <a className="secondmenu" href="/courses">Courses</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/certified-agile-leadership-essentials/">Certified Agile Leadership - Essentials (CAL-E)</Link>
                      </li>
                      <li>
                        <Link to="/certified-agile-leadership-organizations/">Certified Agile Leadership - Organizations (CAL-O)</Link>
                      </li>
                      <li>
                        <Link to="/certified-agile-leadership-for-teams-cal-t/"> Certified Agile Leadership for Teams (CAL-T)</Link>
                      </li>

                      <li>
                        <Link to="/professional-agile-leadership-essentials/">Professional Agile Leadership - Essentials</Link>
                      </li>
                      <li>
                        <Link to="/certified-agile-leadership-combo/">Certified Agile Leadership - Combo</Link>
                      </li>
                      <li>
                        <Link to="/professional-scrum-master/">Professional Scrum Master I</Link>
                      </li>

                      <li>
                        <Link to="/professional-scrum-master-ii/">Professional Scrum Master II</Link>
                      </li>
                      <li>
                        <Link to="/professional-scrum-product-owner/">Professional Scrum Product Owner I</Link>
                      </li>
                      <li>
                        <Link to="/professional-scrum-product-owner-advanced/">Professional Scrum Product Owner II</Link>
                      </li>
                      <li>
                        <Link to="/certified-scrum-master/">Certified Scrum Master</Link>
                      </li>
                      <li>
                        <Link to="/certified-scrum-product-ownercspo/">Certified Scrum Product Owner</Link>
                      </li>

                      <li>
                        <Link href="/professional-agile-leadership-evidence-based-management/">PAL - Evidence-Based Management</Link>
                      </li>

                      <li><Link to="/icagile-product-management/">Product Management – Practitioner(ICP-PDM)</Link></li>

                      <li>
                        <Link to="/scaled-professional-scrum/">Scaled Professional Scrum</Link>
                      </li>
                      <li>
                        <Link to="/icagile/">Agile Coaching (ICP-ACC)</Link>
                      </li>
                      <li>
                        <Link to="/icagile-enterprise-coaching/">Agility in the Enterprise (ICP-ENT)</Link>
                      </li>
                      <li>
                        <Link to="/coaching-agile-transitions/">Coaching Agile Transitions (ICP-CAT)</Link>
                      </li>

                      <li>
                        <Link to="/professional-scrum-with-kanban/">Professional Scrum with KanBan</Link>
                      </li>
                      <li>
                        <Link to="/prokanban/">Applying Professional KanBan</Link>
                      </li>

                      <li>
                        <Link to="/applying-metrics-for-predictabilityapm/">Applying Metrics for Predictability(APM)</Link>
                      </li>

                      <li>
                        <Link to="/professional-scrum-with-user-experience/">Professional Scrum with UX</Link>
                      </li>

                      <li>
                        <Link to="/icagile-business-agility/">Business Agility - Essentials (ICP-BAF)</Link>
                      </li>
                      <li>
                        <Link to="/pmi/">Project Management Institute- Agile Certified Practitioner (PMI-ACP)</Link>
                      </li>


                      <li>
                        <a href="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework" target="__blank"> Scrum Foundations </a>
                      </li>

                      <li>
                        <a href="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80" target="__blank"> Metrics for Predictability</a>
                      </li>

                      <li>
                        <a href="https://www.tryscrum.com/applying-professional-scrum/" target="__blank">APS</a>
                      </li>

                      <li>
                        <a href="https://www.tryscrum.com/applying-professional-scrum-for-software-development/" target="__blank">APS - Software Development</a>
                      </li>

                    </ul>
                  </li>

                  {/* Bundle Courses */}
                  {/* <li className="hideonfull">
                  <a className="secondmenu" href="/bundle-courses">Bundle Courses</a>
                </li>
                 */}

                  {/* courses link only show on big screen size only*/}
                  {/* <li className="mega-drop-down"><a href="#"><i className="fa fa-list"></i> Mega Menu</a> */}
                  <li className="mega-drop-down">
                    <a className="secondmenu" href="/courses">Courses</a>

                    <div className="animated fadeIn mega-menu">

                      <div className="mega-menu-wrap">
                        <div className="row">

                          <div className="col-md-4">
                            <h4 className="row mega-title">Leadership Education</h4>
                            {/* previous comment out <ul className="stander"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="/certified-agile-leadership-organizations/"><img src={calo} />Certified Agile Leadership - Organizations (CAL-O)</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/certified-agile-leadership-essentials/"><img src={cale} />Certified Agile Leadership - Essentials (CAL-E)</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/certified-agile-leadership-for-teams-cal-t/"><img src={calt} /> Certified Agile Leadership for Teams (CAL-T)</a></li>


                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/certified-agile-leadership-combo/"><img src={caleot} /> Certified Agile Leadership - Combo</a></li>

                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-agile-leadership-essentials/"><img src={pale} /> Professional Agile Leadership - Essentials</a></li>


                            </ul>
                          </div>

                          {/* previous comment out <div className="col-md-2"> */}
                          <div className="col-md-4">
                            <h4 className="row mega-title">Scrum Master</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li><a href="/certified-scrum-master/"><img src={csm} />Certified Scrum Master</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-scrum-master/"><img src={psm} />Professional Scrum Master I</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-scrum-master-ii/"><img src={psm2} />Professional Scrum Master II</a></li>
                              {/* <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Professional Scrum Product Owner I</a></li>
                                        <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Professional Scrum Product Owner II</a></li> */}

                              {/* <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Certified Scrum Product Owner</a></li> */}
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/scaled-professional-scrum/"><img src={sps} />Scaled Professional Scrum</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-scrum-facilitation-skills/"><img src={psfs} alt="psfs" />Professional Scrum Facilitation Skills</a></li>

                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="row mega-title">Product Owner</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="/certified-scrum-product-ownercspo/"><img src={cspo} />Certified Scrum Product Owner</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-scrum-product-owner/"><img src={pspo} />Professional Scrum Product Owner I</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-scrum-product-owner-advanced/"><img src={pspo2} />Professional Scrum Product Owner II</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/professional-agile-leadership-evidence-based-management/"><img src={palebm} />PAL - Evidence-Based Management</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/icagile-product-management/"><img src={icppdm} />Product Management – Practitioner(ICP-PDM)</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/user-story-essentials/"><img src={userstory} />User Story – Essentials</a></li>

                            </ul>
                          </div>
                          {/* previous comment out <div className="col-md-3"> */}
                          <div className="col-md-4">
                            <h4 className="row mega-title">Coaching Workshop</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">
                              <li><a href="/icagile/"><img src={icpacc} />Agile Coaching (ICP-ACC)</a>
                                {/* previous comment out <span>Description of Women</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/icagile-enterprise-coaching/"><img src={icpent} />Agility in the Enterprise (ICP-ENT)</a>
                                {/* previous comment out <span>Description of men Cloths</span> */}
                              </li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/coaching-agile-transitions/"><img src={icpcat} />Coaching Agile Transitions (ICP-CAT)</a>
                                {/* previous comment out <span>Description of Kids Cloths</span> */}
                              </li>
                              {/* previous comment out below also <li><a href="#">Others</a> */}
                              {/* <span>Description of Others Cloths</span> */}
                              {/* </li> */}
                              {/* <li> */}
                              {/* <a className="view-more btn btn-sm " href="#">View more
                                        </a>          */}
                              {/* previous comment out above also</li> */}
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <h4 className="row mega-title">Kanban Training</h4>
                            {/*  previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="/professional-scrum-with-kanban/"><img src={psk} />Professional Scrum with KanBan</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/prokanban/"><img src={apk} />Applying Professional KanBan</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="/applying-metrics-for-predictabilityapm/"><img src={amp} />Applying Metrics for Predictability(APM)</a></li>

                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Design Thinking</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="/professional-scrum-with-user-experience/"><img src={psu} />Professional Scrum with UX</a></li>

                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Business Agility</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="/icagile-business-agility/" target="__blank"><img src={icpbaf} />Business Agility - Essentials (ICP-BAF)</a></li>
                              <li><a href="/pmi/" target="__blank"><img src={pmi} />Project Management Institute- Agile Certified Practitioner (PMI-ACP)</a></li>

                            </ul>
                          </div>


                          <div className="col-md-4">
                            <h4 className="row mega-title">Online Self-learning</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework" target="__blank"><img src={tryscrumlogo} />Scrum Foundations</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80" target="__blank"><img src={tryscrumlogo} />Metrics for Predictability</a></li>


                            </ul>
                          </div>

                          <div className="col-md-4">
                            <h4 className="row mega-title">Developer</h4>
                            {/* previous comment out <ul className="description"> */}
                            <ul className="sub-menu mega-menu-alignment">

                              <li><a href="https://www.tryscrum.com/applying-professional-scrum/" target="__blank"><img src={aps} />APS</a></li>
                              <div style={{ marginBottom: "5px" }}></div>
                              <li><a href="https://www.tryscrum.com/applying-professional-scrum-for-software-development/" target="__blank"><img src={apssd} />APS - Software Development</a></li>


                            </ul>
                          </div>

                          {/* previous comment out below also <div className="col-md-3">
                                <h4 className="row mega-title">Icon + Description</h4>
                                    <ul className="icon-des"> 
                                    
                                        <li><a href="#"><i className="fa fa-globe"></i>Web</a></li>
                                        <li><a href="#"><i className="fa fa-mobile"></i>Mobile</a></li>
                                        <li><a href="#"><i className="fa fa-arrows-h"></i>Responsive</a></li>
                                        <li><a href="#"><i className="fa fa-desktop"></i>Desktop</a></li>
                                        <li><a href="#"><i className="fa fa-paint-brush"></i>UI/UX</a></li>
                                    </ul>
                                </div> previous comment out above also */}

                        </div>

                      </div>

                    </div>
                  </li>

                  {/* Bundle Courses */}
                  {/* <li className="mega-drop-down">
                  <a className="secondmenu" href="/bundle-courses">Bundle Courses</a>
                </li> */}

                  <li>
                    <a className="thirdmenu" href="#none">Resources</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <a href="/whitepapers">WhitePapers</a>
                        {/* <ul className="sub-menu">

                        <li>
                          <Link to="/resources/whitepaper-stages-of-scrum-mastery/">The Stages of Scrum Mastery</Link>
                        </li>

                        <li>
                          <Link to="/whitepaper-scaling-scrum/">Scaling Scrum with Nexus</Link>
                        </li>
                        
                      </ul> */}
                      </li>

                      <li>
                        <Link to="/tools">Tools</Link>
                      </li>

                      <li>
                        <Link to="/podcasts">Podcasts</Link>
                      </li>

                      <li>
                        <Link to="/scrumplus">tryScrum Plus</Link>
                      </li>
                      <li>
                        <Link to="/which-scrum-role-is-right-for-me">Which Role Is Right For Me</Link>
                      </li>

                    </ul>
                  </li>


                  <li>
                    <a className="fourthmenu" href="#">Community</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/studios">Studios</Link>
                      </li>
                      <li>
                        <Link to="/webcast">Webcasts</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="fifthmenu" to="/about">About</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>

                    </ul>
                  </li>

                  <li>
                    <a className="sixthmenu" href="#">Help</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/support">Support</Link>
                      </li>
                      <li>
                        <Link to="/virtual-class-special-instructions">Virtual Class Instructions</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ's</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="sixthmenu" href="/bundle-courses">Bundle Courses</a>
                    {/* <div><a className="bundlemenu" href="/bundle-courses"><span style={{color:"#333"}}>Bundle Courses</span></a></div> */}
                  </li>

                </ul>
              </div>


              <div className="right-side-box">
                {/* <div className="searchBox">
                  <input
                    className="searchInput"
                    type="text"
                    aria-label="Search"
                    placeholder="Type to filter..."
                  />
                </div> */}


                {/* <div className="header__social">
                  
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>

                </div>   */}

              </div>
            </div>
          </nav>



          <div className="site-header__decor hide_color">
            <div className="site-header__decor-row">
              <div className="site-header__decor-single">
                <div className="site-header__decor-inner-1"></div>
              </div>
              <div className="site-header__decor-single">
                <div className="site-header__decor-inner-2"></div>
              </div>
              <div className="site-header__decor-single">
                <div className="site-header__decor-inner-3"></div>
              </div>
            </div>
          </div>
        </header>

      )
    }

    return (


      <header className="site-header site-header__header-two ">


        {/*Desktop Nav start */}

        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky  ${this.state.sticky ? "stricked-menu stricky-fixed" : ""
            }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="250"
                  alt="Awesome alter text"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>

            <div className="main-navigation">
              <ul className="navigation-box">

                {/* <li className="current"> */}
                <li>
                  <a className="firstmenu" href="#">Offerings</a>
                  <ul className="sub-menu">

                    <li>
                      <Link to="/corporate-training">Corporate Training</Link>
                    </li>
                    <li>
                      <Link to="/agile-coaching">Coaching</Link>
                    </li>
                    <li>
                      <Link to="/enterprise-coaching-consulting">Management Consulting</Link>
                    </li>

                  </ul>
                </li>

                {/* courses link only show on small screen size*/}
                <li className="hideonfull">
                  <a className="secondmenu" href="/courses">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/certified-agile-leadership-essentials/">Certified Agile Leadership - Essentials (CAL-E)</Link>
                    </li>
                    <li>
                      <Link to="/certified-agile-leadership-organizations/">Certified Agile Leadership - Organizations (CAL-O)</Link>
                    </li>

                    <li><Link to="/certified-agile-leadership-for-teams-cal-t/"> Certified Agile Leadership for Teams (CAL-T)</Link></li>

                    <li>
                      <Link to="/certified-agile-leadership-combo/"> Certified Agile Leadership - Combo</Link>
                    </li>

                    <li>
                      <Link to="/professional-agile-leadership-essentials/">Professional Agile Leadership - Essentials</Link>
                    </li>

                    <li>
                      <Link to="/professional-scrum-master/">Professional Scrum Master I</Link>
                    </li>

                    <li>
                      <Link to="/professional-scrum-master-ii/">Professional Scrum Master II</Link>
                    </li>
                    <li>
                      <Link to="/professional-scrum-product-owner/">Professional Scrum Product Owner I</Link>
                    </li>
                    <li>
                      <Link to="/professional-scrum-product-owner-advanced/">Professional Scrum Product Owner II</Link>
                    </li>
                    <li>
                      <Link to="/certified-scrum-master/">Certified Scrum Master</Link>
                    </li>
                    <li>
                      <Link to="/certified-scrum-product-ownercspo/">Certified Scrum Product Owner</Link>
                    </li>

                    <li>
                      <Link to="/professional-agile-leadership-evidence-based-management/">PAL - Evidence-Based Management</Link>
                    </li>

                    <li><Link to="/icagile-product-management/">Product Management – Practitioner(ICP-PDM)</Link></li>

                    <li>
                      <Link to="/scaled-professional-scrum/">Scaled Professional Scrum</Link>
                    </li>
                    <li>
                      <Link to="/icagile/">Agile Coaching (ICP-ACC)</Link>
                    </li>
                    <li>
                      <Link to="/icagile-enterprise-coaching/">Agility in the Enterprise (ICP-ENT)</Link>
                    </li>
                    <li>
                      <Link to="/coaching-agile-transitions/">Coaching Agile Transitions (ICP-CAT)</Link>
                    </li>

                    <li>
                      <Link to="/professional-scrum-with-kanban/">Professional Scrum with KanBan</Link>
                    </li>
                    <li>
                      <Link to="/prokanban/">Applying Professional KanBan</Link>
                    </li>

                    <li>
                      <Link to="/applying-metrics-for-predictabilityapm/">Applying Metrics for Predictability(APM)</Link>
                    </li>

                    <li>
                      <Link to="/professional-scrum-with-user-experience/">Professional Scrum with UX</Link>
                    </li>

                    <li>
                      <Link to="/icagile-business-agility/">Business Agility - Essentials (ICP-BAF)</Link>
                    </li>
                    <li>
                      <Link to="/pmi/">Project Management Institute- Agile Certified Practitioner (PMI-ACP)</Link>
                    </li>

                    <li>
                      <a href="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework" target="__blank"> Scrum Foundations </a>
                    </li>

                    <li>
                      <a href="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80" target="__blank"> Metrics for Predictability</a>
                    </li>

                    <li>
                      <a href="https://www.tryscrum.com/applying-professional-scrum/" target="__blank">APS</a>
                    </li>

                    <li>
                      <a href="https://www.tryscrum.com/applying-professional-scrum-for-software-development/" target="__blank">APS - Software Development</a>
                    </li>



                  </ul>
                </li>

                {/* Bundle Courses */}
                {/* <li className="hideonfull">
                  <a className="secondmenu" href="/bundle-courses">Bundle Courses</a>
                </li> */}


                {/* courses link only show on big screen size only*/}
                {/* <li className="mega-drop-down"><a href="#"><i className="fa fa-list"></i> Mega Menu</a> */}
                <li className="mega-drop-down">
                  <a className="secondmenu" href="/courses">Courses</a>

                  <div className="animated fadeIn mega-menu">

                    <div className="mega-menu-wrap">
                      <div className="row">

                        <div className="col-md-4">
                          <h4 className="row mega-title">Leadership Education</h4>
                          {/* previous comment out <ul className="stander"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/certified-agile-leadership-organizations/"><img src={calo} />Certified Agile Leadership - Organizations (CAL-O)</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/certified-agile-leadership-essentials/"><img src={cale} />Certified Agile Leadership - Essentials (CAL-E)</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/certified-agile-leadership-for-teams-cal-t/"><img src={calt} /> Certified Agile Leadership for Teams (CAL-T)</a></li>


                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/certified-agile-leadership-combo/"><img src={caleot} /> Certified Agile Leadership - Combo</a></li>

                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-agile-leadership-essentials/"><img src={pale} /> Professional Agile Leadership - Essentials</a></li>


                          </ul>
                        </div>

                        {/* previous comment out <div className="col-md-2"> */}
                        <div className="col-md-4">
                          <h4 className="row mega-title">Scrum Master</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/certified-scrum-master/"><img src={csm} />Certified Scrum Master</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-scrum-master/"><img src={psm} />Professional Scrum Master I</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-scrum-master-ii/"><img src={psm2} />Professional Scrum Master II</a></li>
                            {/* <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Professional Scrum Product Owner I</a></li>
                                        <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Professional Scrum Product Owner II</a></li> */}

                            {/* <div style={{marginBottom: "5px"}}></div>
                                        <li><a href="#"><img src={psm_icon}/>Certified Scrum Product Owner</a></li> */}
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/scaled-professional-scrum/"><img src={sps} />Scaled Professional Scrum</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-scrum-facilitation-skills/" ><img src={psfs} alt="psfs" />Professional Scrum Facilitation Skills</a></li>

                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4 className="row mega-title">Product Owner</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/certified-scrum-product-ownercspo/"><img src={cspo} />Certified Scrum Product Owner</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-scrum-product-owner/"><img src={pspo} />Professional Scrum Product Owner I</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-scrum-product-owner-advanced/"><img src={pspo2} />Professional Scrum Product Owner II</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/professional-agile-leadership-evidence-based-management/"><img src={palebm} />PAL - Evidence-Based Management</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/icagile-product-management/"><img src={icppdm} />Product Management – Practitioner(ICP-PDM)</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/user-story-essentials/"><img src={userstory} />User Story – Essentials</a></li>

                          </ul>
                        </div>
                        {/* previous comment out <div className="col-md-3"> */}
                        <div className="col-md-4">
                          <h4 className="row mega-title">Coaching Workshop</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">
                            <li><a href="/icagile/"><img src={icpacc} />Agile Coaching (ICP-ACC)</a>
                              {/* previous comment out <span>Description of Women</span> */}
                            </li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/icagile-enterprise-coaching/"><img src={icpent} />Agility in the Enterprise (ICP-ENT)</a>
                              {/* previous comment out <span>Description of men Cloths</span> */}
                            </li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/coaching-agile-transitions/"><img src={icpcat} />Coaching Agile Transitions (ICP-CAT)</a>
                              {/* previous comment out <span>Description of Kids Cloths</span> */}
                            </li>
                            {/* previous comment out below also <li><a href="#">Others</a> */}
                            {/* <span>Description of Others Cloths</span> */}
                            {/* </li> */}
                            {/* <li> */}
                            {/* <a className="view-more btn btn-sm " href="#">View more
                                        </a>          */}
                            {/* previous comment out above also</li> */}
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h4 className="row mega-title">Kanban Training</h4>
                          {/*  previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/professional-scrum-with-kanban/"><img src={psk} />Professional Scrum with KanBan</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/prokanban/"><img src={apk} />Applying Professional KanBan</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="/applying-metrics-for-predictabilityapm/"><img src={amp} />Applying Metrics for Predictability(APM)</a></li>

                          </ul>
                        </div>

                        <div className="col-md-4">
                          <h4 className="row mega-title">Design Thinking</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/professional-scrum-with-user-experience/"><img src={psu} />Professional Scrum with UX</a></li>

                          </ul>
                        </div>

                        <div className="col-md-4">
                          <h4 className="row mega-title">Business Agility</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="/icagile-business-agility/" target="__blank"><img src={icpbaf} />Business Agility - Essentials (ICP-BAF)</a></li>
                            <li><a href="/pmi/" target="__blank"><img src={pmi} />Project Management Institute- Agile Certified Practitioner (PMI-ACP)</a></li>
                          </ul>
                        </div>

                        <div className="col-md-4">
                          <h4 className="row mega-title">Online Self-learning</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="https://tryscrum.teachable.com/p/introduction-to-the-scrum-framework" target="__blank"><img src={tryscrumlogo} />Scrum Foundations</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="https://sso.teachable.com/secure/238180/checkout/2933345/agile-metrics-for-predictability?coupon_code=TRYS80" target="__blank"><img src={tryscrumlogo} />Metrics for Predictability</a></li>


                          </ul>
                        </div>

                        <div className="col-md-4">
                          <h4 className="row mega-title">Developer</h4>
                          {/* previous comment out <ul className="description"> */}
                          <ul className="sub-menu mega-menu-alignment">

                            <li><a href="https://www.tryscrum.com/applying-professional-scrum/" target="__blank"><img src={aps} />APS</a></li>
                            <div style={{ marginBottom: "5px" }}></div>
                            <li><a href="https://www.tryscrum.com/applying-professional-scrum-for-software-development/" target="__blank"><img src={apssd} />APS - Software Development</a></li>


                          </ul>
                        </div>
                        {/* previous comment out below also <div className="col-md-3">
                                <h4 className="row mega-title">Icon + Description</h4>
                                    <ul className="icon-des"> 
                                    
                                        <li><a href="#"><i className="fa fa-globe"></i>Web</a></li>
                                        <li><a href="#"><i className="fa fa-mobile"></i>Mobile</a></li>
                                        <li><a href="#"><i className="fa fa-arrows-h"></i>Responsive</a></li>
                                        <li><a href="#"><i className="fa fa-desktop"></i>Desktop</a></li>
                                        <li><a href="#"><i className="fa fa-paint-brush"></i>UI/UX</a></li>
                                    </ul>
                                </div> previous comment out above also */}

                      </div>

                    </div>

                  </div>
                </li>

                {/* Bundle Courses */}
                {/* <li className="mega-drop-down">
                  <a className="secondmenu" href="/bundle-courses">Bundle Courses</a>
                </li> */}

                <li>
                  <a className="thirdmenu" href="#none">Resources</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <a href="/whitepapers">WhitePapers</a>
                      {/* <ul className="sub-menu">

                        <li>
                          <Link to="/resources/whitepaper-stages-of-scrum-mastery/">The Stages of Scrum Mastery</Link>
                        </li>

                        <li>
                          <Link to="/whitepaper-scaling-scrum/">Scaling Scrum with Nexus</Link>
                        </li>
                        
                      </ul> */}
                    </li>

                    <li>
                      <Link to="/tools">Tools</Link>
                    </li>

                    <li>
                      <Link to="/podcasts">Podcasts</Link>
                    </li>

                    <li>
                      <Link to="/scrumplus">tryScrum Plus</Link>
                    </li>
                    <li>
                      <Link to="/which-scrum-role-is-right-for-me">Which Role Is Right For Me</Link>
                    </li>

                  </ul>
                </li>


                <li>
                  <a className="fourthmenu" href="#">Community</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/studios">Studios</Link>
                    </li>
                    <li>
                      <Link to="/webcast">Webcasts</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link className="fifthmenu" to="/about">About</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="sixthmenu" href="#">Help</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                    <li>
                      <Link to="/virtual-class-special-instructions">Virtual Class Instructions</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ's</Link>
                    </li>
                  </ul>
                </li>



                <li>
                  <div><a className="bundlemenu" href="/bundle-courses"><span style={{ color: "#333" }}>Bundle Courses</span></a></div>
                </li>


              </ul>
            </div>


            <div className="right-side-box">
              {/* <div className="searchBox">
                  <input
                    className="searchInput"
                    type="text"
                    aria-label="Search"
                    placeholder="Type to filter..."
                  />
                </div> */}


              {/* <div className="header__social">
                  
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>

                </div>   */}

            </div>
          </div>
        </nav>



        <div className="site-header__decor hide_color">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>

      </header>

    );
  }
}
export default NavTwo;
