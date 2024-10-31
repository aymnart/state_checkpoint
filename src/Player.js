import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, age, imageUrl, jerseyNumber }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {`${name} is a ${age} year old ${nationality} international footbal player, currently he's playing for ${team} with jersey number ${jerseyNumber}.`}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Player;
