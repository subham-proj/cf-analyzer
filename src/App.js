import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Search from "./components/search";
import Generic from "./components/generic";
import User from "./components/user";
import Rating from "./components/rating";

import Footer from "./components/footer";

function App() {
  const baseURL = "https://codeforces.com/api/user.info?handles=";
  const ratingURL = "https://codeforces.com/api/user.rating?handle=";

  const [user, setUser] = useState({});
  const [rating, setRating] = useState([]);

  const onSearch = async (handle) => {
    const requestURL = baseURL + handle;

    const response = await fetch(requestURL);
    const responseJSON = await response.json();

    const ratingReqURL = ratingURL + handle;

    const ratingResponse = await fetch(ratingReqURL);
    const ratingResponseJSON = await ratingResponse.json();

    // handling exception caused by invalid username.
    if (responseJSON.status === "OK") {
      setUser(responseJSON.result[0]);
      setRating(ratingResponseJSON.result);
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
      {user.handle ? <User user={user} /> : ""}
      {user.handle ? <Rating rating={rating} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
