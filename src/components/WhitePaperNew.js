import React from "react";
import { Link } from "gatsby";
import blog1 from "../assets/images/try-Scrum-imgaes/imgs/scrum-mastery-mentoring-program.jpg";
import blog2 from "../assets/images/try-Scrum-imgaes/imgs/stages-of-scrum-mastery.jpg";


const Whitepaper = () => {

  return (

    <section className="blog-one blog-page">
          <div className="container">
            <div className="row">

              <div className="col-lg-6">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src={blog1} alt="" />
                    {/* <Link to="/news-details" className="blog-one__plus">
                      <i className="kipso-icon-plus-symbol"></i>
                    </Link> */}
                  </div>
                  <div className="blog-one__content text-center">
                    
                    
                      <Link to="/resources/whitepaper-stages-of-scrum-mastery">
                        <h2 className="blog-one__title">
                          The Stages of Scrum Mastery
                        </h2>
                      </Link>
                    
                    <p className="blog-one__text">
                      There are four stages of Scrum Mastery, and where you fall will determine both your effectiveness and efficiency as a Servant-Leader.                </p>
                      <Link to="/resources/whitepaper-stages-of-scrum-mastery" >
                        <p className="blog-one__link">
                          Read More
                        </p>
                      </Link>
                  </div>
                </div>
              </div>


              <div className="col-lg-6">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src={blog2} alt="" />
                  
                  </div>
                  <div className="blog-one__content text-center">
                    
                    
                      <Link to="/whitepaper-scaling-scrum">
                        <h2 className="blog-one__title">
                           Scaling Scrum with Nexus
                        </h2>
                      </Link>
                    
                    <p className="blog-one__text">
                    In 2016, a leading security products company adopted Scrum to support teams working in complex product development, in order to make the organization more adaptive and able to react faster to change.                </p>
                    <Link to="/whitepaper-scaling-scrum" >
                      <p className="blog-one__link">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </section>
  );
};


export default Whitepaper;

