import React from "react";
import { Link } from "gatsby";
import Venkateshsmall from "../svg/Venkateshsmall.svg";
import Farooq from "../svg/farooq.svg";
// import Raosmall from "../svg/raosmall.svg"
import Arunsmall from "../svg/arunsmall.svg";
import Kiransmall from "../svg/kiransmall.svg";
import Buvanasmall from "../svg/buvana.svg";
import Vignasmall from "../svg/vignasmall.svg";



const Leadership = () => {
  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="card h-70 border-0">
                
                  <Venkateshsmall />
                  
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Venkatesh is a Founder of tryScrum.com, a Management Consulting firm. He is also a Professional Scrum Trainer ® with Scrum.org, a Certified Enterprise Coach® with Scrum Alliance.</h5>
                  <Link to="/venkatesh/" className="btn btn-danger" style={{ backgroundColor:"", color:"white" }}>Visit Profile</Link>
                </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-70 border-0">
               
                  <Arunsmall /> 
            
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Arunvignesh is a Professional Agile trainer in tryScrum.com.  He is a  Professional Scrum Trainer ® with Scrum.org, Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor.</h5>
                  <Link to="/arunvignesh/" className="btn" style={{ backgroundColor:"#73B79E", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>

          {/* <div className="col-lg-6">
            <div className="card h-70 border-0">
           
                  <Raosmall />
              
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Venkateswara Rao is an Agile Evangelist helping Organisations and Individuals in Agile Transformations and make work fun. He is a  Certified Team Coach® (CTC) with Scrum Alliance, and ICAgile Authorized Instructor®.</h5>
                  <Link to="/venkateswara/" className="btn" style={{ backgroundColor:"#F49B31", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div> */}

          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Kiransmall />
              
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>A passionate product professional believes in the power of data and collective intelligence. Certified in user-centred Analysis & Product management, he brings in various perspectives to make informed decisions.</h5>
                  <Link to="/kiran/" className="btn" style={{ backgroundColor:"#8C91AE", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Buvanasmall />
              
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Buvana is responsible for providing customer service and support to tryScrum customers. She also manages the course schedule and trainer communication at tryScrum. Her passion is to serve customers, cultivate long-term relationships, and help clients achieve their goals.</h5>
                  <Link to="/buvana/" className="btn" style={{ backgroundColor:"#CCDE7A", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div>  

          
          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Farooq />
  
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Umar is an “empiricist” who empowers people to explore concrete ways to build customer-centric Product(s) and evoke organisations towards “Value-driven” agility.</h5>
                  <Link to="/umar" className="btn" style={{ backgroundColor:"#043754", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div> 


          <div className="col-lg-6">
            <div className="card h-70 border-0">
              
                  <Vignasmall />
  
                <div className="card-body text-center">
                  <h5 className="card-title" style={{marginLeft:"5%"}}>Vigna offers support and services to tryScrum customers also she helps in scheduling the event as per the availability of trainers.</h5>
                  <Link to="/vigna" className="btn" style={{ backgroundColor:"#FABA51", color:"white" }}>Visit Profile</Link>
                </div>
              </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Leadership;
