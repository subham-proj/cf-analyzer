import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";

function header() {
  return (
    <div>
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={Logo}
              width="300px"
              height="50px"
              style={{ paddingTop: "10px" }}
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
}

export default header;
