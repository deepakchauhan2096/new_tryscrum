import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/VirtualHeader";
import Footer from "../components/Footer";
import Support from "../components/VirtualClass";

const VirtualPage = () => {
  return (
    <Layout pageTitle="tryScrum | Virtual Class" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <StudiosHeaders title="tryScrum Virtual Class" />
      <Support />
      <Footer />
    </Layout>
  );
};

export default VirtualPage;