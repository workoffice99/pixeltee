import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo.png";
import Discord from "./../../Assets/discord.png";
import Insta from "./../../Assets/instagram 1.png";
import Twitter from "./../../Assets/Twitter.png";

export default function Footer() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} height="90px" width="auto" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-around">
            <Nav className="me-auto ml-3">
              <Nav.Link href="#deets">HOME</Nav.Link>
              <Nav.Link href="#deets">OVERVIEW</Nav.Link>
              <Nav.Link href="#deets">ROAD MAP</Nav.Link>
              <Nav.Link href="#deets">TEAM</Nav.Link>
              <Nav.Link href="#deets">FAQ</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">
                <img src={Insta} width="auto" height="30px" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src={Discord} width="auto" height="30px" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src={Twitter} width="auto" height="30px" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
