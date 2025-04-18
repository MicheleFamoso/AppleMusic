import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import appleMusic from "../assets/logos/music.svg"

const NavMobile = function () {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-gray d-lg-none"
      variant="dark"
    >
      <Container>
        {" "}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className=" text-pink"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=" text-pink">Preferiti</Nav.Link>
            <Nav.Link className=" text-pink">Generi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={appleMusic} alt="LogoMusic" style={{ filter: "invert(1)" }} />
        <Navbar.Brand className=" text-pink fw-semibold">Accedi</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavMobile
