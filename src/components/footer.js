import React from "react";
import { Container, Button } from "react-bootstrap";
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
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
