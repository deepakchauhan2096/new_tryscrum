import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/SupportHeader";
import Footer from "../components/Footer";
import Support from "../components/Support";

const SupportPage = () => {
  return (
    <Layout pageTitle="tryScrum | Support" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <StudiosHeaders title="tryScrum Support" />
      <Support />
      <Footer />
    </Layout>

  );
};

export default SupportPage;