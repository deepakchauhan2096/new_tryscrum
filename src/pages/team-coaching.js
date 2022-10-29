import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import TeamHeader from "../components/TeamHeader";
import TeamCoaching from "../components/TeamCoaching"
import Footer from "../components/Footer";

const Coach = () => {
  return (
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <TeamHeader title="Team Coaching" /> 
      <TeamCoaching />    
      <Footer />
    </Layout>
  );
};

export default Coach;
