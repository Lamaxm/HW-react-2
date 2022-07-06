import React, { useState } from "react";
import CardData from "./CardData";
import {Card} from 'react-bootstrap';

function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memeImage} />
        <Card.Body>
          <Button variant="primary" onClick={myRandomEmg}>Get a new image</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;