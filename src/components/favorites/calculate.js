import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Calculate = (props) => {
  const { nums, history } = props;

  let remaining = 5 - nums;

  if (nums === 0) return '';

  return (
    <Container>
        <Button disabled={nums < 5 } onClick={() => {history.push("/result")}}>CALCULATE MY WEIRDNESS SCORE</Button>

      { (nums < 5 ) && (
        <span>You must like {5 - nums} more GIF{remaining > 1 ? 's' : ''} to calculate your score</span>
      )}
    </Container>
  );
};

export default withRouter(Calculate);
