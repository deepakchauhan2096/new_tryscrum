import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import AgileLeadershipHeader from "../components/AgileLeadershipHeader";
import Footer from "../components/Footer";
import AgileLeadershipStudio from "../components/AgileLeadershipStudio";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Studio" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <AgileLeadershipHeader title="Studio" />
      <AgileLeadershipStudio />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
