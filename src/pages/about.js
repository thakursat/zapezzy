import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Cta from "../sections/about/CTA";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="About us">
          Create custom landing pages with Zapezzy that converts more visitors
          than any website.
        </Hero>
        <Content />
        <Team />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default About;
