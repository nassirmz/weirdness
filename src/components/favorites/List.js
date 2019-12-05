import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ListItem from './ListItem';

const List = (props) => {
  const { favorites } = props;

  return (
    <Container>
      <Row>
        {favorites.map(gif => (
          <ListItem gif={gif} key={gif.id}/>
        ))}
      </Row>
    </Container>
  );
};

export default List;
