import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/NavTwo";
import WhitePaper from "../../components/WhitePaperStages";
import Footer from "../../components/Footer";
import WhitepaperScaling from "../../components/ScrumMastery";

const WhitepaperScalingScrum = () => {
 

  return (
    <Layout pageTitle="tryScrum | Whitepaper" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="whitepapers" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <WhitePaper title="WhitePaper" />
      <WhitepaperScaling />
      <Footer />
    </Layout>
  );
};

export default WhitepaperScalingScrum;