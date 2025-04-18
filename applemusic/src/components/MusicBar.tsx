import { Container } from "react-bootstrap"
import img from "../assets/images/2a.png"

const MusicBar = function () {
  return (
    <Container
      className="bg-gray2 rounded-3 d-block d-md-none  py-2 px-3 fixed-bottom  shadow-lg mb-2 "
      style={{ width: "95%" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <img
          src={img}
          alt="cover"
          className="rounded-3"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />

        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-play-fill text-light fs-2"></i>
          <i className="bi bi-skip-forward-fill text-light fs-2"></i>
        </div>
      </div>
    </Container>
  )
}

export default MusicBar
