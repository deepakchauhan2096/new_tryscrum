import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import BusinessHeader from "../components/BusinessHeader";
import BusinessCoaching from "../components/BusinessCoaching"
import Footer from "../components/Footer";

const Coach = () => {
  return (
    <Layout pageTitle="tryScrum | Coaching | Offerings" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <BusinessHeader title="Business Coaching" /> 
      <BusinessCoaching />     
      <Footer />
    </Layout>
  );
};

export default Coach;