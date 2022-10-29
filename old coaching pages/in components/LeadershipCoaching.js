import React from "react";
import leadershipcoachingimg from "../assets/images/leadership-coaching.png"
import contentimg from "../assets/images/content.png";
import {Link} from "gatsby";

import pspo from "../assets/tryScrum-course-logos/pspo.png";
import pspoa from "../assets/tryScrum-course-logos/pspoa.png";
import psm from "../assets/tryScrum-course-logos/psm.png";
import psk from "../assets/tryScrum-course-logos/psk.png";
import apk from "../assets/tryScrum-course-logos/apk.png";
import icppdm from "../assets/tryScrum-course-logos/icppdm.png";
import pspo3 from "../assets/tryScrum-course-logos/pspo3.png";
import psu from "../assets/tryScrum-course-logos/psu.png";
import sps from "../assets/tryScrum-course-logos/sps.png";
import amp from "../assets/tryScrum-course-logos/amp.png";
import psm2 from "../assets/tryScrum-course-logos/psm2.png";
import icpacc from "../assets/tryScrum-course-logos/icpacc.png";
import icpcat from "../assets/tryScrum-course-logos/icpcat.png";
import psm3 from "../assets/tryScrum-course-logos/psm3.png";
import ctc from "../assets/tryScrum-course-logos/ctc.png";
import icpent from "../assets/tryScrum-course-logos/icpent.png";
import cec from "../assets/tryScrum-course-logos/cec.png";
import beginner from "../assets/tryScrum-course-logos/beginner.png"
import craftsman from "../assets/tryScrum-course-logos/craftsman.png"
import journeyman from "../assets/tryScrum-course-logos/journeyman.png"
import practitioner from "../assets/tryScrum-course-logos/practitioner.png"

const TeamCoaching = () => {
  return (
    <section className="pricing-one pricing-page ">
      <div className="container">
        {/* <div className="block-title text-center">
          <h2 className="block-title__title">
            Offering 
          </h2>
        </div> */}
        {/* <div className="row">
          
            <img src={leadershipcoachingimg} class="img-fluid" alt="Leadership-Coaching image" />
            <img src={contentimg} class="img-fluid" alt="Leadership-Coaching image" />
         
        </div> */}

        <div className="container">
              
          <div className="container bootstrap snippets bootdeys">
              <div class="col-md-9">
                  <div className="timeline-centered timeline-sm">
                      
                      <article className="timeline-entry">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>12:45 AM</span><span>Today</span></time>
                                */}
                              <div className="timeline-img-pos-right">
                                <Link to="/professional-scrum-master-ii/">
                                <img src={psm2} alt="psm 2" className="timeline-img-dimensions"/></Link></div>
        
                              <img src={beginner} alt="beginner" className="timeline-img-dimensions-tag img-fluid"/>
                              
                          </div>
                      </article>

                      <article className="timeline-entry left-aligned">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-left">
                              <Link to="/icagile/">
                                <img src={icpacc} alt="icpacc" className="timeline-img-dimensions"/></Link></div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-right">
                              <Link to="/prokanban/">
                                <img src={apk} alt="apk" className="timeline-img-dimensions"/></Link></div>     
                              <img src={practitioner} alt="practitioner" className="timeline-img-dimensions-tag img-fluid"/>
                                
                          </div>
                      </article>

                      <article className="timeline-entry left-aligned">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-left">
                              <Link to="/coaching-agile-transitions/">
                                <img src={icpcat} alt="icpcat" className="timeline-img-dimensions"/></Link></div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-right">
                                <Link to="">
                                <img src={psm3} alt="psm3" className="timeline-img-dimensions"/></Link></div>
                              
                              <img src={journeyman} alt="journeyman" className="timeline-img-dimensions-tag img-fluid"/>

                          </div>
                      </article>

                      <article className="timeline-entry left-aligned">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-left">
                              <Link to="/scaled-professional-scrum/">
                                <img src={sps} alt="sps" className="timeline-img-dimensions"/></Link></div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-right">

                                <Link to="applying-metrics-for-predictabilityapm/">
                                  <img src={amp} alt="amp" className="timeline-img-dimensions"/>
                                </Link>

                              </div>

                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Craftsman</h4> */}
                              <img src={craftsman} alt="craftsman" className="timeline-img-dimensions-tag img-fluid"/>
                              {/* </div> */}
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry left-aligned">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-left">

                                <Link to="">
                                
                                  <img src={ctc} alt="ctc" className="timeline-img-dimensions"/>
                                
                                </Link>

                              </div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-right">
                              <Link to="/icagile-enterprise-coaching/">
                                
                                <img src={icpent} alt="icpent" className="timeline-img-dimensions"/>
                              
                              </Link>
                              
                              </div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>

                      <article className="timeline-entry left-aligned">
                          <div className="timeline-entry-inner">
                              {/* <time datetime="2014-01-10T03:45" className="timeline-time"><span>9:15 AM</span><span>Today</span></time> */}
                              
                              <div className="timeline-img-pos-right">
                              <Link to="">  
                                <img src={cec} alt="cec" className="timeline-img-dimensions"/>
                              </Link>  
                              </div>
                              {/* <div className="timeline-label-left bg-green"><h4 className="timeline-title">Job Meeting</h4>
                              <p>Caulie dandelion maize lentil collard greens radish arugula sweet pepper water spinach kombu courgette.</p></div> */}
                          </div>
                      </article>


                  </div>
              </div>
          </div>


            <br />
            <br />
            <br />
            <div class="red_div">
                <strong><p>Competency Levels</p></strong>
            </div>
            <br />
            <br />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-6" style={{borderBottom: "solid 1px black", borderRight: "solid 1px black", marginBottom: "0" }}>
                        <div className="row">
                            <div className="col-md-6" >
                                <h3><strong>Beginner</strong></h3>
                            </div>
                            <div className="col-md-6">
                                {/* <img src="https://mask.vervebot.io/wp-content/uploads/2021/06/WhatsApp_Image_2021-06-29_at_12.04.04_PM-removebg-preview-122x58.png"/> */}
                                <img src={beginner}/>
                            </div>
                        </div>
            <p>The individual doesn't understand or know how to do something. However, the individual is at the starting stage to learn informational knowledge. The length of time spends in this stage depends on the strength of stimulus to learn</p>
            </div>
            <div className="col-md-6"  style={{borderBottom: "solid 1px black", borderLeft: "solid 1px black"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Practitioner</h3>
                    </div>
                    <div className="col-md-6">
                        {/* <img src="https://mask.vervebot.io/wp-content/uploads/2021/06/WhatsApp_Image_2021-06-29_at_12.04.04_PM-removebg-preview-122x58.png"/> */}
                        <img src={practitioner}/>
                    </div>
                </div>
                <p>The individual is practising the skills they gained for some time and still looking to improve their work.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" style={{borderTop: "solid 1px black", borderRight: "solid 1px black"}}> <div className="row">
                <div className="col-md-6" >
                    <h3>Journeyman</h3>
                </div>
                <div className="col-md-6">
                    {/* <img src="https://mask.vervebot.io/wp-content/uploads/2021/06/WhatsApp_Image_2021-06-29_at_12.04.04_PM-removebg-preview-122x58.png"/> */}
                    <img src={journeyman}/>
                </div>
            </div>
            <p>The individual using the competencies daily and is eager to assist others while recognizing their own existing limitations. At this stage, the indvidual is conscious competent.</p>
            </div>
            <div className="col-md-6"  style={{borderTop: "solid 1px black", borderLeft: "solid 1px black"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Craftsman</h3>
                    </div>
                    <div className="col-md-6">  
                        {/* <img src="https://mask.vervebot.io/wp-content/uploads/2021/06/WhatsApp_Image_2021-06-29_at_12.04.04_PM-removebg-preview-122x58.png"/> */}
                        <img src={craftsman}/>
                    </div>
                </div>
                <p>The individual is highly skilled, and their competencies are validated by other experts in similar field and share expertise as an instructor. At this stage, the individual is unconscioulsy competent enough to guide others</p>
            </div>
          </div>
        </div>
    
        </div>

      </div>
    </section>
  );
};

export default TeamCoaching;
