import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
//import PageHeader from "../components/PageHeader";
import ScrumPlusHeader from "../components/ScrumPlusHeader";
import Footer from "../components/Footer";
import ScrumPlusContent from "../components/ScrumPlus";

const ScrumPlus = () => {
  return (
    <Layout pageTitle="tryScrum | Scrum +" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <ScrumPlusHeader title="Scrum +" />
      <ScrumPlusContent />
      <Footer />
    </Layout>
  );
};

export default ScrumPlus;
