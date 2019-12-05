import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Calculate = (props) => {
  const { nums, history } = props;

  let remaining = 5 - nums;

  if (nums === 0) return '';

  return (
    <Container className="text-center mt-3">
        <Button
          disabled={nums < 5 }
          onClick={() => {history.push("/result")}}
          size="sm"
          variant="light">
          CALCULATE MY WEIRDNESS SCORE
         </Button>

      { (nums < 5 ) && (
        <p
          className="mt-2">
          You must like {5 - nums} more GIF{remaining > 1 ? 's' : ''} to calculate your score
        </p>
      )}
    </Container>
  );
};

export default withRouter(Calculate);
