import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing7/Hero";
import Content from "../sections/about/Content";
import Faq from "./faq";
import Cta from "../sections/landing4/CTA";
import Seo from '../components/SEO'

const About = () => {
  return (
    <>
      <Seo title={"About"} />
      <PageWrapper headerDark>
        <Hero background="dark" title="We drive experiences for brands with purpose.">
        </Hero>
        <Content />
        <Faq />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default About;
