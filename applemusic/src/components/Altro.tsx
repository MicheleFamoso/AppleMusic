import { Col, Container, Row } from "react-bootstrap"

const Altro = function () {
  return (
    <Container fluid className=" bg-dark text-light mb-5">
      <Row>
        <h3 className=" mt-5 fw-bold ms-3">Altro da esplorare</h3>
        <Col xs="12" md="4">
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Esplora per genere </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Decenni </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Attivita' </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Wordwilde </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Classifiche </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Audio Spaziale </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Video Musicali </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Nuovi artisti </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
          <div className=" d-flex justify-content-between me-3 ms-3 bg-gray p-3 rounded-3 mt-4">
            <p className=" m-0 text-pink"> Hit del passato </p>
            <p className=" m-0 text-pink"> &gt; </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Altro
