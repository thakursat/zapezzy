import React from "react";
import Hero from "../sections/landing7/Hero";
import Content1 from "../sections/landing1/Content1";
import Content2 from "../sections/landing1/Content2";
import Cta from "../sections/landing3/CTA";
import PageWrapper from "../components/PageWrapper";
import Seo from '../components/SEO'

const IndexPage = () => {
  return (
    <>
      <Seo title={"Home"} />
      <PageWrapper headerDark footerDark>
        <Hero background="dark" title="Professional developers creating meaningful digital experiences." subTitle=" A digital agency who helps you uplift your brand"/>
        <Content1 />
        <Content2 />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
