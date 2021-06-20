import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
      <Container>
        <Row className="justify-content-center">
          <Col md="10" lg="10">
            <Box className="text-center">
              <Title color="light">Mark your digital presence now!</Title>
              <Text mb={4} color="light" opacity={0.7}>
                We’re always interested in talking about your product.
              </Text>
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}>Connect</Button>

              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
