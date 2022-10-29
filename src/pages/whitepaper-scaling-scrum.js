import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
//import PageHeader from "../components/PageHeader";
import WhitePaper from "../components/WhitepaperNexus";
import Footer from "../components/Footer";
import WhitepaperScaling from "../components/WhitepaperScaling";

const WhitepaperScalingScrum = () => {
  return (
    <Layout pageTitle="tryScrum | Whitepaper" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="whitepapers" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="Whitepaper" />
      <WhitepaperScaling />
      <Footer />
    </Layout>
  );
};

export default WhitepaperScalingScrum;
