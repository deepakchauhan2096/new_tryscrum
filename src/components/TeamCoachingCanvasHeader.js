import React from "react";
import { Link } from "gatsby";

const TeamCoachingCanvasHeader = (props) => {
  return (
    <section className="inner-banner-coaching-canvas">
      <div className="container-tools">
        <ul className="list-unstyled inner-banner-coaching-canvas-thm-breadcrumb-tools">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="../tools">Tools</a> 
            
          </li>
        </ul>
        <h2 className="inner-banner-coaching-canvas__title-tools">TEAM COACHING CANVAS</h2>
      </div>
    </section>
  );
};

export default TeamCoachingCanvasHeader;

