import { Col, Container, Row } from "react-bootstrap"

const Footer = function () {
  return (
    <Container className=" bg-gray pt-3  ">
      <Row>
        <Col xs="12">
          <p className=" text-light ms-4 mb-5">
            Italia | <span> English (UK)</span>
          </p>
        </Col>
        <Col xs="12">
          <p className=" text-light ms-4">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </p>
        </Col>
        <Col xs="12">
          <p className=" text-light ms-4   ">
            Condizioni dei servizi internet | Apple Music e privacy | Supporto |
            Feedback
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
