import React from 'react';
import { Row, Container } from 'react-bootstrap';

import List from './List';

const Favorites = () => {
  return (
    <Container>
      <h5> YOUR LIKED GIFS </h5>
      <List/>
    </Container>
  );
};

export default Favorites;
