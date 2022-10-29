import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import WhitepapperHeaders from "../components/WhitePaperHeader";
import Footer from "../components/Footer";
import WhitePaper from "../components/WhitePaperNew";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Whitepaper" pageName="whitepapers">
      <NavTwo />
      <WhitepapperHeaders title="Whitepaper" />
      <WhitePaper /> 
      <Footer />
    </Layout>

  );
};

export default GalleryPage;