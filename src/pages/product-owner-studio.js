import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageProductHeader from "../components/PageProductHeader";
import Footer from "../components/Footer";
import ProductOwnerStudio from "../components/ProductOwnerStudio";

const GalleryPage = () => {
  return (
    <Layout pageTitle="tryScrum | Studio" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      <PageProductHeader title="Studio" />
      <ProductOwnerStudio />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
