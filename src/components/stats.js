import React from "react";
import { Card } from "react-bootstrap";

function Stats({ rating }) {
  let totalContest = rating.length;
  let bestRank = rating[0].rank;
  let worstRank = rating[0].rank;

  let bestRatingChange = rating[0].newRating - rating[0].oldRating;
  let worstRatingChange = rating[0].newRating - rating[0].oldRating;

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

  return (
    <div>
      <Card>
        <Card.Body>
          <h5>
            Total Contest : <span className="statsData">{totalContest}</span>
          </h5>
          <h5>
            Best Rank : <span className="statsData">{bestRank}</span>
          </h5>
          <h5>
            Worst Rank : <span className="statsData">{worstRank}</span>
          </h5>
          <h5>
            Best Rating Change :{" "}
            <span className="statsData">{bestRatingChange}</span>
          </h5>
          <h5>
            Worst Rating Change :{" "}
            <span className="statsData">{worstRatingChange}</span>
          </h5>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Stats;
