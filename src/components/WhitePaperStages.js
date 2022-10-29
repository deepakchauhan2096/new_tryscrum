import React from "react";
import { Link } from "gatsby";

const WhitePaper = (props) => {
  return (
    <section className="inner-banner-scaling">
      <div className="container-scaling">
        <ul className="list-unstyled thm-breadcrumb-scaling">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="../whitepapers">WhitePaper</a> 
            
          </li>
        </ul>
        <h2 className="inner-banner__title-scaling">The Stages of Scrum Mastery</h2>
      </div>
    </section>
  );
};

export default WhitePaper;
