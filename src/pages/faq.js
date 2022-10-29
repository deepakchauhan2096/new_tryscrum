import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const FaqPage = () => {
  return (
    <Layout pageTitle="tryScrum | FAQ" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <PageHeader title="FAQ" />
      <Faq />
      <Footer />
    </Layout>
  );
};

export default FaqPage;
