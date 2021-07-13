import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import User from "./components/user";
import Search from "./components/search";
import Footer from "./components/footer";

function App() {
  const baseURL = "https://codeforces.com/api/user.info?handles=";

  const [user, setUser] = useState({});

  const onSearch = async (handle) => {
    const requestURL = baseURL + handle;

    const response = await fetch(requestURL);
    const responseJSON = await response.json();

    // handling exception caused by invalid username.
    if (responseJSON.status === "OK") {
      setUser(responseJSON.result[0]);
      // console.log(routePath);
    } else {
      alert("Not Found");
    }
  };

  return (
    <div>
      <Header />

      <Search onSearch={onSearch} />

      <User user={user} />

      <Footer />
    </div>
  );
}

export default App;
