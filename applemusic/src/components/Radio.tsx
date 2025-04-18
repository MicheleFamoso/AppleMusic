import { Col, Container, Row } from "react-bootstrap"
import img1 from "../assets/images/2a.png"
import img2 from "../assets/images/2b.png"
import img3 from "../assets/images/2c.png"
import img4 from "../assets/images/2e.png"
import img5 from "../assets/images/2f.png"

const Radio = function () {
  return (
    <Container fluid className=" bg-dark">
      <Row>
        <h3 className=" text-light mt-5">Nuovi episodi radio &gt; </h3>

        <div className="d-flex flex-nowrap overflow-auto gap-3 py-2 align-items-start ">
          <Col xs="6" lg="3">
            <div>
              <img src={img1} alt="artist" className=" w-100 rounded-3" />
              <p className=" text-light fw-bold">Prologo con Abuelo</p>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div>
              <img src={img2} alt="artist" className=" w-100 rounded-3" />
              <p className=" text-light fw-bold">The Wandered</p>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div>
              <img src={img3} alt="artist" className=" w-100 rounded-3" />
              <p className=" text-light fw-bold">Michel Buble'</p>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div>
              <img src={img4} alt="artist" className=" w-100 rounded-3" />
              <p className=" text-light fw-bold">Stephan Moccio</p>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div>
              <img src={img5} alt="artist" className=" w-100 rounded-3" />
              <p className=" text-light fw-bold">Travis Mills</p>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

export default Radio
