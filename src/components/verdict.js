import React from "react";
import { Card } from "react-bootstrap";

import { Doughnut } from "react-chartjs-2";

function Verdict({ data }) {
  let ac = 0,
    wa = 0,
    tle = 0,
    ce = 0,
    re = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].testset === "TESTS") {
      if (data[i].verdict === "OK") ac++;
      else if (data[i].verdict === "WRONG_ANSWER") wa++;
      else if (data[i].verdict === "TIME_LIMIT_EXCEEDED") tle++;
      else if (data[i].verdict === "COMPILATION_ERROR") ce++;
      else if (data[i].verdict === "RUNTIME_ERROR") re++;
    }
  }
  // console.log("\n");

  // console.log(ac);
  // console.log(wa);
  // console.log(tle);
  // console.log(ce);
  // console.log(re);
  const totalVerdicts = [ac, wa, tle, ce, re];
  const types = [
    "ACCEPTED",
    "WRONG ANSWER",
    "TIME LIMIT EXCEEDED",
    "COMPILATION ERROR",
    "RUNTIME ERROR",
  ];

  return (
    <div style={{ paddingTop: "50px" }}>
      <Card>
        <Card.Body>
          <Doughnut
            data={{
              labels: types,
              datasets: [
                {
                  label: "Submission Doughnut",
                  data: totalVerdicts,
                  backgroundColor: [
                    "#1C8C0E",
                    "#E56255",
                    "#F7750F",
                    "#d6ba22",
                    "#6F6D6D",
                  ],
                  borderColor: [
                    "#115708",
                    "#8f3128",
                    "#a6581b",
                    "#96810c",
                    "#1f1c1c",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={400}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "right",
                },
              },
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Verdict;
