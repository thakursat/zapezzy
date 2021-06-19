import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Section, Title, Text, Box, Span } from "../components/Core";

const NavStyled = styled(Nav)`
  border-radius: 10px;
  border: 1px solid #eae9f2;
  background-color: #f7f7fb;
  padding-top: 15px;
  padding-bottom: 15px;
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    &:hover,
    &:active,
    &:visited {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
`;

const Faq = () => {
  return (
    <>

      <Section className="pb-0">
        <div className="pt-5"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="9">
              <Title variant="hero">Frequently Asked Question</Title>
              {/* <Text>
                  Create custom landing pages with Zapezzy that converts
                </Text> */}
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="general">
            <Row>
              <Col md="4" className="mb-5 mb-md-0">
                <NavStyled className="flex-column mr-md-5">
                  <Nav.Link eventKey="general">General</Nav.Link>
                  <Nav.Link eventKey="pricing">Pricing</Nav.Link>
                </NavStyled>
              </Col>
              <Col md="8">
                <Tab.Content>
                  <Tab.Pane eventKey="general">
                    <Box>
                      <Box mb={4}>
                        <Title variant="card" mb={3} fontSize="24px">
                          What Is A Digital Agency?
                        </Title>
                        <Text variant="small">
                          A digital agency is a company that leverages digital channels to grow their clients’ brands online. <br />

                          “Digital agency” is typically used as an umbrella term for a variety of agencies that combine expertise in different channels and technologies such as web design, digital marketing, creative design and app development, for instance.
                        </Text>
                      </Box>
                      <Box mb={4}>
                        <Title variant="card" mb={3} fontSize="24px">
                          What services does a digital agency provide?
                        </Title>
                        <Text variant="small">
                          Digital agency services include, but are not limited to:

                          <ul>- Digital strategy and consulting</ul>
                          <ul>- Web design and development</ul>
                          <ul>- Digital marketing including social media, email marketing and more</ul>
                          Some digital agencies also provide software and app development, digital transformation and even branding and creative services.
                        </Text>
                      </Box>
                      <Box mb={4}>
                        Didn’t find your answer?{" "}
                        <a href="/">
                          <Span color="primary">Contact us here</Span>
                        </a>
                      </Box>
                    </Box>
                  </Tab.Pane>
                  <Tab.Pane eventKey="pricing">
                    <Box>
                      <Box mb={4}>
                        <Title variant="card" mb={3} fontSize="24px">
                          How do digital agencies charge for their services?
                        </Title>
                        <Text variant="small">
                          Digital agencies typically price their services based on hourly rates.
                          <br />
                          Whether you are looking to outsource a one-time project like website development or to partner with an agency on a retainer basis, you will most likely receive a pricing range based on the estimate of the number of hours your project would require.
                        </Text>
                      </Box>
                      <Box mb={4}>
                        <Title variant="card" mb={3} fontSize="24px">
                          How to choose a digital agency?
                        </Title>
                        <Text variant="small">
                          The first step to choosing a digital agency is to filter the candidates based on expertise. Match their capabilities to your requirement.
                          <br />
                          The second step is to shortlist the candidates based on rates and portfolios.
                          <br />
                          The final —and perhaps the most important — step is to interview the shortlisted digital agencies to identify the one you can develop a long-term relationship with.
                        </Text>
                      </Box>

                      <Box mb={4}>
                        Didn’t find your answer?{" "}
                        <a href="/">
                          <Span color="primary">Contact us here</Span>
                        </a>
                      </Box>
                    </Box>
                  </Tab.Pane>

                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Section>

    </>
  );
};
export default Faq;
