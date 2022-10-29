import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/SupportHeaderRefund";
import Footer from "../components/Footer";
import Refund from "../components/Refund";

const SupportPage = () => {
  return (
    <Layout pageTitle="tryScrum | refund policies" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <StudiosHeaders title="Refund Policies" />
      <Refund />
      <Footer />
    </Layout>

  );
};

export default SupportPage;