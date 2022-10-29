import React from "react";
// import certificate1 from "../assets/images/psm3.png";
// import certificate2 from "../assets/images/instructor.png";
// import certificate2 from "../assets/images/icagile.png";
import Vignalarge from "../svg/vignalarge.svg";


const TeachersDetails = () => {
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">Read my story</h2>
              <p className="team-details__text">
                Vigna is passionate about event operations and reducing barriers for participants. She offers customer support and services to tryScrum to ensure a world-class experience. She leverages her background in administration and customer service in different organizations to understand customers' needs better and provide flawless service.
              </p>
              {/* <h3 className="team-details__subtitle">Credentials</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate2} alt="" />
                </li>
                <li>
                  <img src={certificate1} alt="" style={{ width: "150px", height: "150px" }} />
                </li>
              </ul> */}




            </div>
          </div>
          <div className="col-lg-6">

            <Vignalarge />

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
