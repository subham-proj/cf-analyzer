import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";

import moment from "moment";

// function to re render with change in year
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function Heatmap({ data }) {
  // console.log(data);
  const countData = [];
  const year = [];

  let currentYear = new Date().getFullYear().toString();

  if (data.length >= 1) {
    const arr = [];
    const x = [];

    for (let i = 0; i < data.length; i++) {
      let temp = moment.unix(data[i].creationTimeSeconds).format("YYYY-MM-DD");
      let years = moment.unix(data[i].creationTimeSeconds).format("YYYY");
      arr.push(temp);
      if (years !== currentYear) x.push(years);
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

  const [selectedYear, setselectedYear] = useState("");

  useForceUpdate(); //this function forces to render and we'll be useful when we have changes the year option

  let displayYear = currentYear;
  // handling the case when a user is searched and has an year and the next user doesn't have it so it give blank graph
  for (let i = 0; i < year.length; i++) {
    if (selectedYear) {
      if (selectedYear === year[i]) {
        displayYear = selectedYear;
      }
    }
  }

  // console.log(displayYear);
  return (
    <div style={{ paddingTop: "50px" }}>
      <Card style={{ padding: "20px" }}>
        <Card.Body>
          <div className="year">
            <select
              onChange={(e) => setselectedYear(e.target.value)}
              value={selectedYear}
            >
              <option value={currentYear} selected>
                {currentYear}
              </option>
              {year.reverse().map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>
          <CalendarHeatmap
            startDate={displayYear + "-01-01"}
            endDate={displayYear + "-12-31"}
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
