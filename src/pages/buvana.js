import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import LeadershipHeaders from "../components/LeadershipHeaders";
import Footer from "../components/Footer";
import BuvanaDesc from "../components/BuvanaDescription";

const Buvana = () => {
  return (
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <LeadershipHeaders title="Team" />
      <BuvanaDesc />
      <Footer />
    </Layout>

  );
};

export default Buvana;