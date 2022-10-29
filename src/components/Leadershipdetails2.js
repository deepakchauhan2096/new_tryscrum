import React from "react";
import certificate1 from "../assets/images/ctc.png";
import certificate2 from "../assets/images/cal.png";
import certificate3 from "../assets/images/instructor.png";

import certificate4 from "../assets/images/scrum_t.png";
import certificate5 from "../assets/images/orsc.jpeg";

import certificate6 from "../assets/images/pst_arun.png";

import Arunvignesh from "../svg/arunvignesh-ramakrishnan2.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text">
                Arunvignesh serves as the Owner for Coaching Programs at tryScrum. These solutions are a portfolio of learning solutions designed to enable individuals and teams to be successful through Coaching. Arun has 13 years of experience in software development and delivery as a Business Analyst, Scrum Master and Agile Coach.He also co-created and launched the Coaching Programs at tryScrum along with the team. Arun lives and works in Coimbatore, India where he takes every opportunity to enjoy skiing and the great outdoors with his family & friends.
              </p>
              <h3 className="team-details__subtitle">Credentials</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate6} alt="" style={{width:"150px", height:"150px"}}/>
                </li>
                <li>
                  <img src={certificate1} alt="" />
                </li>
                <li>
                  <img src={certificate3} alt="" />
                </li>
              </ul>

              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate4} alt="" />
                </li>
                <li>
                  <img src={certificate2} alt="" />
                </li>
                <li>
                  <img src={certificate5} alt="" />
                </li>
              </ul>


            
            </div>
          </div>
          <div className="col-lg-6">

            <Arunvignesh />


            {/* <div className="team-one__single">
              <div className="team-one__image">
                <img src={teamd1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">Arunvignesh Ramakrishnan</a>
                </h2>
                <p className="team-one__designation">AGILE TRAINER & CONSULTANT</p>
              </div>
              <div className="team-one__social">
              <a href="https://www.facebook.com/tryScrum.org" target="__blank">
                <i className="fab fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/try_Scrum" target="__blank">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="https://www.linkedin.com/company/tryscrum/" target="__blank">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="https://tryscrumstudio.slack.com/" target="__blank">
                <i className="fab fa-slack"></i>
              </a>
              
              <a href="https://www.meetup.com/Scrum-Master-Studio/" target="__blank">
                <i className="fab fa-meetup"></i>
              </a>

              <a href="https://www.instagram.com/try_Scrum/" target="__blank">
                <i className="fab fa-instagram"></i>
              </a>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
