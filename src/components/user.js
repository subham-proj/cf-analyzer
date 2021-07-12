import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function User({ user, handle }) {
  let rank;

  if (user.rank === "newbie") rank = "newbie";
  else if (user.rank === "pupil") rank = "pupil";
  else if (user.rank === "specialist") rank = "specialist";
  else if (user.rank === "expert") rank = "expert";
  else if (user.rank === "candidate master") rank = "candidate_master";
  else if (user.rank === "master") rank = "master";
  else if (user.rank === "international master") rank = "international_master";
  else if (user.rank === "grandmaster") rank = "grandmaster";
  else if (user.rank === "international grandmaster")
    rank = "international_grandmaster";
  else if (user.rank === "legendary grandmaster")
    rank = "legendary_grandmaster";

  return (
    <div>
      <Container className="userBlock">
        <Row>
          <Col sm={8}>
            <h4 className={rank}>{user.rank}</h4>
            <h3>{handle}</h3>
            <h6>
              {user.firstName} {user.lastName}, {user.city}
            </h6>
          </Col>

          <Col sm={4}>
            <div className="dp">
              <img src={user.titlePhoto} width="100%" height="100%" alt="dp" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
