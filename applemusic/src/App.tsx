import { Col, Container, Row } from "react-bootstrap"
import NavMobile from "./components/NavMobile"
import "./style/main.scss"
import SideDesktop from "./components/SideDesktop"
import "bootstrap-icons/font/bootstrap-icons.css"
import NavMusic from "./components/NavMusic"
import Novita from "./components/Novita"
import Radio from "./components/Radio"
import NuoveUscite from "./components/NuoveUscite"
import Altro from "./components/Altro"
import Footer from "./components/Footer"
import MusicBar from "./components/MusicBar"
function App() {
  return (
    <>
      <Container fluid className=" bg-dark">
        <Row>
          <Col
            xs="12"
            lg="2"
            className="m-0 p-0 d-none d-lg-block position-sticky top-0 vh-100 overflow-auto"
          >
            <SideDesktop />
          </Col>
          <Col xs="12" lg="10" className=" m-0 p-0">
            <header className=" sticky-top">
              <NavMobile />
              <NavMusic />
            </header>
            <main>
              <Novita />
              <Radio />
              <NuoveUscite />
              <Altro />
            </main>
            <footer>
              <Footer />
              <MusicBar />
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
