import React from 'react';
import { Card } from 'react-bootstrap';

const GifCard = (props) => {
  const { url, title, imgSize, cardSize, children } = props;
  return (
    <Card className="text-center" border="light" style={{ width: cardSize, height: cardSize }}>
        <Card.Text>{title}</Card.Text>
        <Card.Text>
          <Card.Img  src={url}   style={{width: imgSize, height: imgSize}} />
        </Card.Text>
      <Card.Text>
        {children}
      </Card.Text>
    </Card>
  );
};

export default GifCard;
