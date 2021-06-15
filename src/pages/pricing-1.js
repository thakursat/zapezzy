import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Feature from "../sections/pricing/Feature";
import PricingTable1 from "../sections/pricing/PricingTable1";
import Faq from "../sections/pricing/FAQ";

const Pricing1 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Pricing">
          Create custom landing pages with Zapezzy that converts more visitors
          than any website.
        </Hero>
        <PricingTable1 />
        <Feature />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default Pricing1;
