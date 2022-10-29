import React, { Component } from "react";
import strech from "../assets/images/slider-1-scratch.png";
import ModalVideo from "react-modal-video";
export default class VideoTwo extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="video-two">
        <div className="container">
          {/* <img src={strech} className="video-two__scratch" alt="" /> */}
          <div className="row">
            <div className="col-lg-7">
              <div className="video-two__content">
                <h2 className="video-two__title">
                  Why tryScrum ?
                  
                </h2>
                
                <h5 className="video-two__secondary"> Play Video to know why you should choose us </h5>
                {/* <a href="#none" className="thm-btn">
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
              <div className="my-auto">
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={this.state.isOpen}
                  videoId="KOBtk5u2qQo"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <div
                  onClick={this.openModal}
                  onKeyDown={this.openModal}
                  role="button"
                  tabIndex={0}
                  className="video-two__popup"
                >
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
