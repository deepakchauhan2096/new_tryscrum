import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PodcastHeader from "../components/PodcastHeader";
import Footer from "../components/Footer";
import PodcastContent from "../components/PodcastContent";

const Podcasts = () => {
  return (
    <Layout pageTitle="tryScrum | Podcast" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
      <NavTwo />
      <PodcastHeader title="Podcast" />
      <PodcastContent />
      <Footer />
    </Layout>
  );
};

export default Podcasts;
