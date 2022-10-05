import React from "react";
import Card from "react-bootstrap/Card";
import Eren_Yeager from './Eren_Yeager.jpg';

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Eren_Yeager} />
        <Card.Body>
          <Card.Title>Eren Yeager</Card.Title>
          <Card.Text>
            I am Eren Yeager and what I seek is absolute dominance.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;