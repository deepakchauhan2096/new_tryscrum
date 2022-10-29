import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
//import PageHeader from "../components/PageHeader";
import RoleHeader from "../components/RoleHeader";
import Footer from "../components/Footer";
import RoleContent from "../components/RoleContent";

const Role = () => {
  return (
    <Layout pageTitle="tryScrum | Scrum Roles" metaDesc="Professional Scrum Certification - Online Agile training tryScrum" pageName="home" >
  
      <NavTwo />
      {/* <PageHeader title="News Details" /> */}
      <RoleHeader title="Scrum Roles" />
      <RoleContent />
      <Footer />
    </Layout>
  );
};

export default Role;
