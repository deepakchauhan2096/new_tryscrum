import React from "react";
import { Link } from "gatsby";

const WebcastHeader = (props) => {
  return (
    <section className="inner-banner_webcast" >
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="#none">Webcast</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">Webcast</h2>
      </div>
      
    </section>
  );
};

export default WebcastHeader;
