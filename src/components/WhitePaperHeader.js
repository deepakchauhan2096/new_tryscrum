import React from "react";
import { Link } from "gatsby";

const PageProductHeader = (props) => {
  return (
    <section className="inner-banner-whitepapper">
      <div className="container">
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <a href="whitepapers">WhitePaper</a>
          </li>
        </ul>
        <h2 className="inner-banner__title">WhitePaper</h2>
      </div>
      
    </section>
  );
};

export default PageProductHeader;
