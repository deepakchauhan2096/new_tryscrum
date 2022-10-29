import React from "react";
import { Link } from "gatsby";

const ToolsHeader = (props) => {
  return (
    <section className="inner-banner-tools">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="tools">Tools</a>
          </li>
        </ul>
        <h2 className="inner-banner__title-tools-lowercase">tryScrum Toolkit</h2>
      </div>
      
    </section>
  );
};

export default ToolsHeader;
