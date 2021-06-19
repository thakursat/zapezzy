import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Feature2 from "../sections/landing2/Feature2";
import Content1 from "../sections/landing4/Content1";
import Content2 from "../sections/landing6/Content1";
import Content3 from "../sections/landing6/Content2";

const Career = () => {
    return (
        <>
            <PageWrapper footerDark>
                <Hero title="Services">
                    Create custom landing pages with Zapezzy that converts more visitors
                    than any website.
                </Hero>
                <Feature2 />
                <Content1 />
                <Content3 />
                <Content2 />
            </PageWrapper>
        </>
    );
};
export default Career;
