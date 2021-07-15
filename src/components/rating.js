import React from "react";
import { Card, Container } from "react-bootstrap";

import moment from "moment";
import { Line } from "react-chartjs-2";

function Rating({ rating }) {
  const a = [];
  const b = [];

  for (let i = 0; i < rating.length; i++) {
    a.push(rating[i].newRating);
    b.push(moment.unix(rating[i].ratingUpdateTimeSeconds).format("MMM YY"));
  }

  // console.log(a);

  return (
    <div>
      <Container fluid style={{ padding: "40px" }}>
        <Card style={{ width: "700px", height: "400px" }}>
          <Card.Body>
            <Line
              data={{
                labels: b,
                datasets: [
                  {
                    label: "Rating Change",
                    data: a,
                    borderWidth: 0.5,
                    borderColor: "rgb(255,0,0)",
                    hoverBackgroundColor: "rgba(0, 0, 0, 1)",
                    pointRadius: 3,
                    pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
                  },
                ],
              }}
              height={400}
              width={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: {
                    ticks: {
                      display: false,
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                layout: {
                  padding: 10,
                },
              }}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Rating;
