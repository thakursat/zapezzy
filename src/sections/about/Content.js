import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/easy-image-2-1.jpg";
import imgContent2 from "../../assets/image/jpeg/easy-image-2-2.jpg";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              Who we are
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              We created Zapezzy by blending our skills for web/app development, machine learning, and brand creation into a powerful, agile team. Our team of designers, developers, and project managers partner with you to build forward-thinking user experiences, so you can focus on result-driven outcomes.
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" sm="5" className="mb-4 ">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
          <Col lg="8" sm="7" className="mb-4">
            <ContentImg>
              <img src={imgContent2} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
