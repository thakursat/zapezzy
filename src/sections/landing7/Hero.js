import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

const Hero = ({title, subTitle, background}) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg={background}>
        <div className="pt-5"></div>
        <Container
          className="position-relative"
          css={`
            z-index: 10;
            height:90vh;
          `}
        >
          <Row>
            <Col md="11" lg="10" xl="9">
              <Box py={4}>
                <Text
                  color={background==="light"?"dark":"light"}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                 {subTitle}
                </Text>
                <Title
                  my={4}
                  variant="hero"
                  color={background==="light"?"dark":"light"}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                 {title}
                </Title>

              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
