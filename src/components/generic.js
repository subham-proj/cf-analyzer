import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import moment from "moment";

function Generic() {
  const baseURL = "https://codeforces.com/api/contest.list?gym=false";

  const [allContest, setAllContest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseURL);
      const data = await response.json();

      setAllContest(data.result);
    }
    fetchData();
  }, []);

  const contest = [];

  for (let i = 0; i < allContest.length; i++) {
    if (allContest[i].phase === "BEFORE") {
      contest.push(allContest[i]);
    } else {
      break;
    }
  }

  let count = 0;
  //   console.log(contest);
  return (
    <div>
      <Container>
        <h3>Upcoming Contest</h3>
        <br></br>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {contest.reverse().map((contest) => (
              <tr key={contest.id}>
                <td>{++count}</td>
                <td>{contest.name}</td>
                <td>
                  {moment
                    .unix(contest.startTimeSeconds)
                    .format("DD MMM YYYY hh:mm a")}
                </td>
                <td>
                  {moment
                    .duration(contest.durationSeconds, "seconds")
                    .format("hh:mm")}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Generic;
