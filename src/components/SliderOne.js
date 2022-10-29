import React, { useState } from "react";
import MessageList from "../components/Chat/MessageList";
import "swiper/css/swiper.css";
import "../components/Chat/style.css";
import slidestrech from "../assets/images/slider-1-scratch.png";
import person from "../assets/images/twoperson.webp";
import { contains } from "jquery";

const SliderOne = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState([]);

  const handleChange = (e) => {
    var message = e.target.value;

    if (message.length >= 3) {
      const filteredDatalist = props.title.filter((post) => {
        return (
          post.acfcoursePage.options.keywords
            .toLowerCase()
            .includes(message.toLowerCase()) ||
          post.title.toLowerCase().includes(message.toLowerCase())
        );

      });
      setFilteredData(filteredDatalist);
      setQuery(message);
    } else {
      const filteredDatalist = [];
      setFilteredData(filteredDatalist);
      setQuery(message);
    }
  };

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">

            <img src={person} className="banner-one__person" alt="" />
            <div className="row no-gutters">
              <div className="col-xl-12">

                <h3 className="banner-one__title banner-one__light-color desktopdisplay">
                  We Humanize <br />
                  Organisations <br />
                </h3>

                <h3 className="banner-one__title_mobile banner-one__light-color mobiledisplay">
                  We Humanize <br />
                  Organisations <br />
                </h3>
              
                <div style={{ width: "50%" }}>

                  <div className="form-search col-xs-12" >
                    {filteredData.length !== 0 ? (
                      <div style={{ width: "75%" }}>
                        <input
                          type="text"
                          className="text-input-hide form-control-lg"
                          id="searchBar"
                          placeholder="Search Courses"
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div style={{ width: "75%" }}>
                        <input
                          type="text"
                          className="text-input form-control-lg"
                          id="searchBar"
                          placeholder="Search Courses"
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {filteredData.length !== 0 ? (
                      <i
                        class="fa fa-search fa-2x faalign "
                        aria-hidden="false"
                        style={{ marginLeft: "10px", zIndex: "-50" }}
                      ></i>
                    ) : (
                      <i
                        class="fa fa-search fa-2x faalign "
                        aria-hidden="false"
                        style={{ marginLeft: "10px" }}
                      ></i>
                    )}

                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {filteredData.length !== 0 ? (
        <MessageList messages={filteredData} />
      ) : null}

    </div>
  );
};

export default SliderOne;