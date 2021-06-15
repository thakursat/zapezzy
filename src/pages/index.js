import React from "react";
import Hero from "../sections/landing7/Hero";
import Feature2 from "../sections/landing2/Feature2";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Testimonial from "../sections/landing1/Testimonial";
import Cta from "../sections/landing3/CTA";
import PageWrapper from "../components/PageWrapper";
import Seo from '../components/SEO'

const IndexPage = () => {
  return (
    <>
    <Seo title={"Home"}/>
      <PageWrapper headerDark footerDark>
        <Hero />
        <Feature2 />
        <Content1 />
        <Content2 />
        <Testimonial />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
