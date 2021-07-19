import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { GrGithub } from "react-icons/gr";

function Footer() {
  return (
    <div className="footerLayout">
      <footer className="footer">
        <Container>
          <p>
            Made with ❤ by{" "}
            <a
              href="https://www.linkedin.com/in/subham-singh-cc"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Subham Singh
            </a>
          </p>
          <Row>
            <Col>
              <h6>
                Page Visits :{" "}
                <img
                  src="https://hitwebcounter.com/counter/counter.php?page=7841171&style=0009&nbdigits=5&type=page&initCount=51"
                  title="Free Counter"
                  Alt="web counter"
                  border="0"
                />
              </h6>
            </Col>
            <Col>
              <Button variant="dark">
                <a
                  href="https://github.com/subham-proj/cf-analyzer"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Contribute on &nbsp;
                  <GrGithub />
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
