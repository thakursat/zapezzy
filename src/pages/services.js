import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing7/Hero";
import Feature2 from "../sections/landing2/Feature2";
import Content1 from "../sections/landing4/Content1";
import Content2 from "../sections/landing6/Content1";
import Content3 from "../sections/landing6/Content2";
import Cta from "../sections/landing4/CTA";
import Seo from '../components/SEO'

const Career = () => {
    return (
        <>  <Seo title={"Services"} />
            <PageWrapper footerDark>
                <Hero background="light" title="From Website, Mobile App to ML powered applications, we've got all covered.">
                </Hero>
                <Feature2 />
                <Content1 />
                <Content3 />
                <Content2 />
                <Cta />
            </PageWrapper>
        </>
    );
};
export default Career;
