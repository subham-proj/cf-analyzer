import React from "react";
import { Card } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";

import moment from "moment";

function Heatmap({ data }) {
  // console.log(data);
  const countData = [];
  const year = [];

  let y = new Date().getFullYear();
  let selectedYear = y.toString();

  if (data.length >= 1) {
    const arr = [];
    const x = [];

    for (let i = 0; i < data.length; i++) {
      let temp = moment.unix(data[i].creationTimeSeconds).format("YYYY-MM-DD");
      let years = moment.unix(data[i].creationTimeSeconds).format("YYYY");
      arr.push(temp);
      x.push(years);
    }

    // mapping dates with total number of submissions
    const occurrences = arr.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    // making object according to the prop mentioned in the documentation
    for (const [key, value] of Object.entries(occurrences)) {
      let temp = { date: key, count: value };
      countData.push(temp);
      // console.log(`${key}: ${value}`);
    }

    // array which all the year from dates in it

    const years = x.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    for (const [key] of Object.entries(years)) {
      year.push(key);
    }

    console.log(year);
    // console.log(countData[0]);
  }

  const handleChange = (event) => {
    event.preventDefault();
    selectedYear = event.target.value;
    console.log(selectedYear);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Card style={{ padding: "20px" }}>
        <Card.Body>
          <div className="year">
            <select onChange={handleChange}>
              {year.reverse().map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <CalendarHeatmap
            startDate={selectedYear + "-01-01"}
            endDate={selectedYear + "-12-31"}
            values={countData}
            classForValue={(value) => {
              if (!value) {
                return `color-empty`;
              }
              return `color-scale-${value.count}`;
            }}
            titleForValue={(value) => {
              if (!value) {
                return ``;
              }
              return "Date : " + value.date;
            }}
            showMonthLabels={true}
            showWeekdayLabels={true}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Heatmap;
