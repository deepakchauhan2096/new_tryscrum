import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import TeamCoachingCanvasHeader from "../components/TeamCoachingCanvasHeader";
import TeamCoachingCanvasContent from "../components/TeamCoachingCanvas";
import Footer from "../components/Footer";

const TeamCoachingCanvas = () => {
 

  return (
    <Layout pageTitle="tryScrum | Tools" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="tools" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <TeamCoachingCanvasHeader title="TEAM COACHING CANVAS" />
      <TeamCoachingCanvasContent />
      <Footer />
    </Layout>
  );
};

export default TeamCoachingCanvas;