import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import AboutHeader from "../components/LeadershipTrue";
import Footer from "../components/Footer";
import About from "../components/Leadership";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Team" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <AboutHeader title="Team" />
      <About />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
