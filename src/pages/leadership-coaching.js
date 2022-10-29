import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import LeadershipHeader from "../components/LeadershipCoachingHeader";
import LeadershipCoaching from "../components/LeadershipCoaching"
import Footer from "../components/Footer";

const Coach = () => {
  return (
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <LeadershipHeader title="Leadership Coaching" /> 
      <LeadershipCoaching />    
      <Footer />
    </Layout>
  );
};

export default Coach;