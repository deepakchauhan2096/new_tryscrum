import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageGalleryHeader from "../components/PageGalleryHeader";
import Footer from "../components/Footer";
import GalleryScrum from "../components/GalleryScrum";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Certified Scrum Training – Scrum Master Studio Chennai" metaDesc="Join the best Scrum Master Studio in Chennai and grow your skills in scrum master, product owner and become a future leader." pageName="home" >
      <NavTwo />
      <PageGalleryHeader title="Studio" />
      <GalleryScrum />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
