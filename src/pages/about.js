import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import About from "../components/AboutOne";
import CountdownKipsoAbout from "../components/CountdownKipsoAbout";
import AboutNew from "../components/AboutNew";
import AboutHeaderNew from "../components/AboutHeaderNew";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | About Us" pageName="aboutus">
      <NavTwo />

      {/* <AboutHeader title="about" /> */}
      {/* <About /> */}

      <AboutHeaderNew title="about" />
      <AboutNew /> 

      <div style={{marginTop: "150px"}} />

      <CountdownKipsoAbout /> 

      <Footer />
    </Layout>
  );
};

export default GalleryPage;
