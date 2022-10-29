import React, {useState} from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import {Link} from "gatsby";

import board from "../assets/images/board.png";

import imgone from "../assets/images/leadership3.png";
import imgtwo from "../assets/images/cultural-assessment2.png";
import imgthree from "../assets/images/organization-design3.png";
import imgfour from "../assets/images/Training2.png";
import imgfive from "../assets/images/improve-teams3.png";
import imgsix from "../assets/images/coaching2.png";

import axios from "axios";
import Popup from 'reactjs-popup';

import Footer from "../components/Footer";



const Coaching = () => {

  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && state.message) {
      debugger;

    const url = "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/94/feedback";
    const formData = new FormData();
    formData.append("your-name", state.name);
    formData.append("your-email", state.email);
    formData.append("your-message", state.message + " - Enterprise Coaching & Consulting Page Popup Contact Inquiry");

  const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

  const res = await axios.post(url, formData, config);
    if (typeof res.data.message !== undefined) {
      //alert(res.data.message);
      setSubmissionMessage(res.data.message);
      setState({ name: "", email: "", message: "" });
    } else {
      alert("please try again");
    }
  }else {
    let error = errors;
    if (state.name === "") {
      // debugger;
      error = {
        ...error,
        name: "This is required",
      };
    }
    if (state.email === "") {
      // debugger;
      error = {
        ...error,
        email: "This is required",
      };
    }
    if (state.message === "") {
      // debugger;
      error = {
        ...error,
        message: "This is required",
      };
    }
    setErrors(error);
  } 
    //console.log(res.data.message, "res");
  };

  

  return (
    <Layout pageTitle="Enterprise Coaching & Consulting" metaDesc="Spinning up a single Scrum team is a challenge. Building an agile organization is a journey. We work with you tocreate a plan and execute it to build and sustain an agile organization." pageName="home" >
      
      <NavTwo />

      {/* <Agilebanner /> */}

      

      <div className="container">
        {/* <h1 className="text-center">Apple Like Content Section</h1> */}
        <div className="row">
          <div className="col-md-6">
            <img src={board} alt="" className="w-100" />
          </div>
         
          <div className="col-md-6">
            <div className="row align-items-center h-100">
              <div className="col">
                <h1 className="display-4" style={{color:"#012237", fontWeight:"bold"}}>Enterprise Coaching & Consulting</h1>
                <p className="lead">Spinning up a single Scrum team is a challenge. Building
                                    an agile organization is a journey. We work with you to
                                    create a plan and execute it to build and sustain an agile
                                    organization. Talk to us today to know more about our
                                    offerings. 
                </p>
              </div>
            </div>
          </div>
        </div>
      

        <div classNameName="photo-gallery">
            <div className="container">
                {/* <div className="intro">
                    <h2 className="text-center">Lightbox Gallery</h2>
                    <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                </div>  */}
                <div className="row photos">
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgone} /></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgtwo} /></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgthree} /></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgfour} /></div>
                </div>
            </div>
        </div>

        <div classNameName="photo-gallery">
            <div className="container">
                <div className="row justify-content-center photos">
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgfive} /></div>
                    <div className="col-sm-6 col-md-4 col-lg-3 item"><img className="img-fluid" src={imgsix} /></div>
                </div>
            </div>
        </div>

        <div className="container">
          
          <div className="row justify-content-center">
              <div className="col-md-12 text-center"> 
                <Popup
                  trigger={<button type="button" className="btn btn-danger btn-lg">Engage Us</button>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal-popup">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="headertwo"> Enterprise Coaching & Consulting </div>

                        <form
                              action="#"
                              method="POST"
                              className="become-teacher__form-content contact-form-validated"
                        >

                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="form-group">
                                      <input
                                          type="text"
                                          placeholder="Your Name"
                                          id="form_name"
                                          className="form-control"
                                          name="name"
                                          value={state.name}
                                          onChange={handleInputChange}
                                      />
                                      <small style={{ color: "red" }}>{errors.name}</small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="form-group">
                                      <input
                                        type="text"
                                        placeholder="Phone Number"
                                        id="form_lastname"
                                        className="form-control"
                                        name="phone"
                                        value={state.phone}
                                        onChange={handleInputChange}
                                        minLength="10"
                                      />
                                      <small style={{ color: "red" }}>{errors.phone}</small>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">
                                <div className="col-md-12">
                                    
                                  <input type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={state.email} onChange={handleInputChange} />
              
                                  <small style={{ color: "red" }}>{errors.email}</small>
                                      
                                </div>       
                              </div>  

                              <div className="row">

                                  <div className="col-md-12">
                                      <div className="form-group">

                                          <textarea id="form_message" name="message" className="form-control" placeholder="Your Query" rows="2" value={state.message} onChange={handleInputChange}></textarea>
                                      
                                          <small style={{ color: "red" }}>{errors.message}</small>

                                      </div>
                                  </div>

                                  <div className="col-md-12 centered-popup-input">
                                      
                                      <input type="submit" class="btn btn-success btn-send" value="Send message" onClick={submitHandler} />
                                    
                                      <br />

                                      <small style={{ color: "green" }}>{submissionMessage}</small>

                                  </div>

                              </div>
      
                        </form>  
                      </div>
                  )}
                </Popup>

               </div>     
            </div>
        </div>
       

      </div>

      <Footer />
    </Layout>
  );
};

export default Coaching;
