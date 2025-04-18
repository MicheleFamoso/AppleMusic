import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Apple from "../assets/logos/apple.svg"
import { Button } from "react-bootstrap"

const NavMusic = function () {
  return (
    <Navbar expand="lg" className="bg-gray d-none d-lg-block sticky-top">
      <Container>
        <div>
          <ul className="list-inline m-0 d-flex align-items-center">
            <li className="list-inline-item">
              <i className="bi bi-shuffle text-gray2 "></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-skip-backward-fill text-gray2 "></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-play-circle-fill text-gray2 fs-4"></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-skip-forward-fill text-gray2 "></i>
            </li>
            <li className="list-inline-item">
              <i className="bi bi-repeat text-gray2 "></i>
            </li>
          </ul>
        </div>
        <Navbar.Brand className="  bg-gray2 px-10 d-flex align-items-center m-0">
          <img
            src={Apple}
            alt="logo"
            className="px-10 m-0"
            style={{ filter: "invert(1)" }}
          />
        </Navbar.Brand>

        <div className="d-flex justify-content-center align-items-center ">
          <i className="bi bi-volume-up text-white me-3 fs-5"></i>
          <input type="range" min="0" max="100" className="form-range w-50" />
          <Button className=" bg-red border-0 ms-5 py-1 d-flex align-items-center gap-2 fw-semibold">
            <i className="bi bi-person-fill"></i>Accedi
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavMusic
