import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import StudiosHeaders from "../components/StudiosHeaders";
import Footer from "../components/Footer";
import Studios from "../components/Studios";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Studios" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <StudiosHeaders title="tryScrum Studios" />
      <Studios />
      <Footer />
    </Layout>

  );
};

export default GalleryPage;