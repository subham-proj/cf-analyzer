import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Search from "./components/search";
import Generic from "./components/generic";
import User from "./components/user";
import Rating from "./components/rating";
import Stats from "./components/stats";
import Verdict from "./components/verdict";
import Heatmap from "./components/heatmap";

import Footer from "./components/footer";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  // Api
  const baseURL = "https://codeforces.com/api/user.info?handles=";
  const ratingURL = "https://codeforces.com/api/user.rating?handle=";
  const verdictURL = "https://codeforces.com/api/user.status?handle=";

  // declaring states
  const [user, setUser] = useState({});
  const [rating, setRating] = useState([]);
  const [verdicts, setVerdicts] = useState([]);

  // fetching api triggered onSearch
  const onSearch = async (handle) => {
    // User info Api
    const requestURL = baseURL + handle;

    const response = await fetch(requestURL);
    const responseJSON = await response.json();

    // User Rating Api
    const ratingReqURL = ratingURL + handle;

    const ratingResponse = await fetch(ratingReqURL);
    const ratingResponseJSON = await ratingResponse.json();

    // User submission verdicts Api

    const verdictReqURL = verdictURL + handle;

    const verdictResponse = await fetch(verdictReqURL);
    const verdictResponseJSON = await verdictResponse.json();

    // handling exception caused by invalid username and setting states.
    if (responseJSON.status === "OK") {
      setUser(responseJSON.result[0]);
      setRating(ratingResponseJSON.result);
      setVerdicts(verdictResponseJSON.result);
      // console.log(routePath);
    } else {
      alert("Not Found");
    }
  };

  return (
    <div>
      <Header />

      <Search onSearch={onSearch} />

      <Generic />
      <Container fluid>
        <Row>
          <Col lg={6} md={12} xs={12} sm={12}>
            {user.handle ? <User user={user} /> : ""}
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            {user.handle ? <Rating rating={rating} /> : ""}
          </Col>
        </Row>

        <Row style={{ paddingTop: "40px" }}>
          <Col lg={6} md={12} xs={12} sm={12}>
            {user.rating ? <Stats rating={rating} /> : ""}
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            {user.rating ? <Verdict data={verdicts} /> : ""}
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        {user.handle ? <Heatmap data={verdicts} /> : ""}
      </Container>

      <Footer />
    </div>
  );
}

export default App;
