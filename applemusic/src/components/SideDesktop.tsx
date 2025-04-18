import { Container } from "react-bootstrap"
import { Form } from "react-bootstrap"
import Apple from "../assets/logos/music.svg"

const SideDesktop = function () {
  return (
    <Container fluid className=" bg-gray min-vh-100 border-end  border-gray2 ">
      <div className=" ms-3 ">
        <img
          src={Apple}
          alt="Logo"
          style={{ filter: "invert(1)" }}
          className="mt-4"
        />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="  Cerca"
            className=" p-1 my-5 me-3 bg-dark text-white border-0 "
            data-bs-theme="dark"
            aria-label="Search"
          />
        </Form>
        <ul className="list-unstyled">
          <li className=" text-light fw-semibold mb-2 fs-5  ">
            <i className="bi bi-house text-pink me-2"></i>Home
          </li>
          <li className=" text-light fw-semibold mb-2 fs-5  ">
            {" "}
            <i className="bi bi-file-plus text-pink me-2"></i>Novita'
          </li>
          <li className=" text-light fw-semibold mb-2 fs-5  ">
            {" "}
            <i className="bi bi-broadcast text-pink me-2"></i>Radio
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default SideDesktop
