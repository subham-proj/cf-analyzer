import React from "react";
import { Table } from "react-bootstrap";

function Stats({ rating }) {
  // declaring variables outside if case otherwise it will throw an error of undeclared variable
  let totalContest, bestRank, worstRank, bestRatingChange, worstRatingChange;

  if (rating.length >= 1) {
    totalContest = rating.length;

    // assing default values as the first value of the array (rating)
    bestRank = rating[0].rank;
    worstRank = rating[0].rank;

    bestRatingChange = rating[0].newRating - rating[0].oldRating;
    worstRatingChange = rating[0].newRating - rating[0].oldRating;

    // traversing array and updating variables accordingly
    for (let i = 1; i < rating.length; i++) {
      if (rating[i].rank < bestRank) {
        bestRank = rating[i].rank;
      }

      if (rating[i].rank > worstRank) {
        worstRank = rating[i].rank;
      }

      let temp = rating[i].newRating - rating[i].oldRating;

      if (temp > bestRatingChange) {
        bestRatingChange = temp;
      }

      if (temp < worstRatingChange) {
        worstRatingChange = temp;
      }
    }
  }

  return (
    <div>
      <Table className="stats">
        <tbody>
          <tr>
            <td>Total Contest</td>
            <td className="statsData">{totalContest}</td>
          </tr>
          <tr>
            <td>Best Rank</td>
            <td className="statsData">{bestRank}</td>
          </tr>

          <tr>
            <td>Worst Rank</td>
            <td className="statsData">{worstRank}</td>
          </tr>

          <tr>
            <td>Best Rating Change</td>
            <td className="statsData">{bestRatingChange}</td>
          </tr>

          <tr>
            <td> Worst Rating Change</td>
            <td className="statsData">{worstRatingChange}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Stats;
