import React from "react";
import certificate1 from "../assets/images/ctc.png";
import certificate2 from "../assets/images/cal.png";
import certificate3 from "../assets/images/orsc.jpeg";
import certificate4 from "../assets/images/spc.png";

import Rao from "../svg/rao2.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text">
                Agile Evangelist helping Organisations and Individuals in Agile Transformations and Make work fun. I follow an extremely light and efficient Agile process, adapted to be most easily applied. I Possess an Agile mindset and Establish continuous delivery processes. I strongly believe people deliver astounding results when they have: Passion and purpose; joy and meaning; and creativity, safety, trust, and belonging.

                He is also an Accredited ICAgile Instructor and a co-creator of the ICP-ACC course in tryScrum.


              </p>
              <h3 className="team-details__subtitle">Credentials</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate1} alt="" />
                </li>
                <li>
                  <img src={certificate2} alt="" />
                </li>
              </ul>

              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate3} alt="" />
                </li>
                <li>
                  <img src={certificate4} alt="" />
                </li>
              </ul>


            </div>
          </div>
          <div className="col-lg-6">

            <Rao />

            {/* <div className="team-one__single">
              <div className="team-one__image">
                <img src={teamd1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">Venkateswara Rao E</a>
                </h2>
                <p className="team-one__designation">PROFESSIONAL AGILE TRAINER</p>
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
