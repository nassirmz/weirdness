import React from 'react';
import { Card, Button } from 'react-bootstrap';

const GifImage = (props) => {
  const { url, title, imgSize, cardSize, children } = props;
  return (
    <Card className="text-center" border="light" style={{ width: cardSize, height: cardSize }}>
      <Card.Body>
        <Card.Text size={12}>{title}</Card.Text>
        <Card.Text>
          <Card.Img  src={url}  height={imgSize} width={imgSize} />
        </Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default GifImage;
