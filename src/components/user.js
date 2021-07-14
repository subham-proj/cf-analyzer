import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import moment from "moment";
import Moment from "react-moment";

import blog from "../assets/blog.png";
import mail from "../assets/mail.png";

function User({ user }) {
  let rank, ratingColor, maxRankColor;

  if (user.rank === "newbie") {
    rank = "newbie";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "pupil") {
    rank = "pupil";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "specialist") {
    rank = "specialist";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "expert") {
    rank = "expert";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "candidate master") {
    rank = "candidate_master";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "master") {
    rank = "master";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "international master") {
    rank = "international_master";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "grandmaster") {
    rank = "grandmaster";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "international grandmaster") {
    rank = "international_grandmaster";
    ratingColor = rank;
    maxRankColor = rank;
  } else if (user.rank === "legendary grandmaster") {
    rank = "legendary_grandmaster";
    ratingColor = rank;
    maxRankColor = rank;
  }

  if (user.maxRank === "newbie") {
    maxRankColor = "newbie";
  } else if (user.maxRank === "pupil") {
    maxRankColor = "pupil";
  } else if (user.maxRank === "specialist") {
    maxRankColor = "specialist";
  } else if (user.maxRank === "expert") {
    maxRankColor = "expert";
  } else if (user.maxRank === "candidate master") {
    maxRankColor = "candidate_master";
  } else if (user.maxRank === "master") {
    maxRankColor = "master";
  } else if (user.maxRank === "international master") {
    maxRankColor = "international_master";
  } else if (user.maxRank === "grandmaster") {
    maxRankColor = "grandmaster";
  } else if (user.maxRank === "international grandmaster") {
    maxRankColor = "international_grandmaster";
  } else if (user.maxRank === "legendary grandmaster") {
    maxRankColor = "legendary_grandmaster";
  }

  const blogURL = "https://codeforces.com/usertalk?other=" + user.handle;
  const commentURL = "https://codeforces.com/comments/with/" + user.handle;
  const talksURL = "https://codeforces.com/usertalk/with/" + user.handle;
  const messageURL = "https://codeforces.com/usertalk?other=" + user.handle;

  return (
    <div style={{ paddingBottom: "40px" }}>
      <Container className="userBlock">
        <Card>
          <Card.Body>
            <Row>
              <Col sm={8}>
                <h4 className={rank}>{user.rank}</h4>
                <h3>{user.handle}</h3>
                <h5>
                  {user.firstName ? "Name : " + user.firstName : ""}
                  {user.lastName
                    ? user.firstName
                      ? " " + user.lastName
                      : ""
                    : ""}
                </h5>
                <h5>
                  {user.city ? "Place : " + user.city : ""}
                  {user.country
                    ? user.city
                      ? ", " + user.country
                      : "Place : " + user.country
                    : ""}
                </h5>
                <h5>
                  {user.organization
                    ? "Organization : " + user.organization
                    : ""}
                </h5>
                <h5>
                  Rating : <span className={ratingColor}>{user.rating}</span>{" "}
                  (max.{" "}
                  <span className={maxRankColor}>
                    {user.maxRank}, {user.maxRating}
                  </span>
                  )
                </h5>
                <h5>Friends of : {user.friendOfCount} users</h5>
                <h5>
                  Last Visit :{" "}
                  <Moment fromNow>
                    {moment(user.lastOnlineTimeSeconds + "000", "x").format(
                      "DD MMM YYYY hh:mm a"
                    )}
                  </Moment>
                </h5>
                <h5>
                  Registered :{" "}
                  <Moment fromNow>
                    {moment(user.registrationTimeSeconds + "000", "x").format(
                      "DD MMM YYYY hh:mm a"
                    )}
                  </Moment>
                </h5>
                <br></br>
                <br></br>
                <img
                  src={blog}
                  width="22px"
                  height="22px"
                  style={{ marginRight: "0.5em" }}
                  alt="blog"
                />
                <a
                  href={blogURL}
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog entries
                </a>
                ,{" "}
                <a
                  href={commentURL}
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comments
                </a>
                <br></br>
                <img
                  src={mail}
                  width="22px"
                  height="22px"
                  style={{ marginRight: "0.5em" }}
                  alt="blog"
                />
                <a
                  href={talksURL}
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talks
                </a>
                ,{" "}
                <a
                  href={messageURL}
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send message
                </a>
                <br></br>
              </Col>

              <Col sm={4}>
                <div className="dp">
                  <img
                    src={user.titlePhoto}
                    width="100%"
                    height="100%"
                    alt="dp"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default User;
