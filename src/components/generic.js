import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import moment from "moment";

function Generic() {
  // api to fetch contest
  const baseURL = "https://codeforces.com/api/contest.list?gym=false";

  const [allContest, setAllContest] = useState([]);

  // fetching all contest and setting the state as array
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseURL);
      const data = await response.json();

      setAllContest(data.result);
    }
    fetchData();
  }, []);

  // since we want only upcoming contest so here the logic is checking for contest yet to happend and assign them to another array
  const contest = [];

  for (let i = 0; i < allContest.length; i++) {
    if (allContest[i].phase === "BEFORE") {
      contest.push(allContest[i]);
    } else {
      break;
    }
  }

  let count = 0; //counter for table index

  //   console.log(contest);
  return (
    <div>
      <Container>
        <h3>ᴜᴘᴄᴏᴍɪɴɢ ᴄᴏɴᴛᴇꜱᴛ</h3>
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
            {/** printing in reverse because we want data in LIFO order */}
            {contest.reverse().map((contest) => (
              <tr key={contest.id}>
                <td>{++count}</td>
                <td>{contest.name}</td>
                <td>
                  {/** setting time from second to a particular format using moment.js */}
                  {moment
                    .unix(contest.startTimeSeconds)
                    .format("DD MMM YYYY hh:mm a")}
                </td>
                <td>
                  {/** setting duration from second to hour-minutes using moment.js */}

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
