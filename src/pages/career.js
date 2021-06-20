import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/career/Content";
import Feature from "../sections/career/Feature";
import Roles from "../sections/career/Roles";
import Seo from '../components/SEO'

const Career = () => {
  return (
    <>
      <Seo title={"Career"} />
      <PageWrapper footerDark>
        <Hero title="Career">

        </Hero>
        <Content />
        <Feature />
        <Roles />
      </PageWrapper>
    </>
  );
};
export default Career;
