import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing7/Hero";
import Content from "../sections/career/Content";
import Feature from "../sections/career/Feature";
import Roles from "../sections/career/Roles";
import Seo from '../components/SEO'

const Career = () => {
  return (
    <>
      <Seo title={"Career"} />
      <PageWrapper headerDark footerDark>
        <Hero title="Career" background="dark">

        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
