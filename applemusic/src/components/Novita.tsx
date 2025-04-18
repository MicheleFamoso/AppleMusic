import { Col, Container, Row } from "react-bootstrap"
import img1 from "../assets/images/1a.png"
import img2 from "../assets/images/1b.png"

const Novita = function () {
  return (
    <Container fluid className=" bg-dark px-4  ">
      <Row>
        <h1 className="text-light fw-bold mt-4">Novita'</h1>
        <hr className=" text-light" />
        <div className="d-flex flex-nowrap overflow-auto gap-3 py-2 align-items-start ">
          <Col xs="10" sm="6" className="flex-shrink-0">
            <div>
              <small className=" text-light fw-bold mb-0">
                NUOVA STAZIONE RADIO
              </small>
              <p className=" text-light text-truncate ">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </p>
              <img src={img1} alt="" className=" w-100 rounded-3" />
            </div>
          </Col>
          <Col xs="10" sm="6" className="flex-shrink-0">
            <div>
              <small className=" text-light fw-bold mb-0">
                NUOVA STAZIONE RADIO
              </small>
              <p className=" text-light ">
                Ecco la nuova casa della musica latina
              </p>
              <img src={img2} alt="" className=" w-100 rounded-3" />
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

export default Novita
