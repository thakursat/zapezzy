import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Faq from "./faq";
import Cta from "../sections/landing4/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="We drive experiences for brands with purpose.">
        </Hero>
        <Content />
        <Faq />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default About;
