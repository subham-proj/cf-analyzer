import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Search(props) {
  const style = {
    textAlign: "center",
    padding: "30px",
  };

  // get data from the search box and set onSearch with handle
  const { onSearch } = props;

  const [handle, setHandle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("handle : " + handle);
    onSearch(handle);
  };

  return (
    <div>
      <Container className="search">
        <Form onSubmit={handleSubmit}>
          <h4 style={style}>Codeforces Username</h4>
          <Form.Group>
            <Form.Control
              className="searchBox"
              type="text"
              id="handle"
              name="handle"
              onChange={(e) => setHandle(e.target.value)}
              value={handle}
              placeholder="Enter the Codeforces Username"
              required
            />
          </Form.Group>

          <div style={style}>
            <Button className="searchButton" variant="dark" type="submit">
              Search
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Search;
