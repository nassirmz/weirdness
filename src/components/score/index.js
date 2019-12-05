import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Container, Button } from 'react-bootstrap';

import GifCard from '../gif';

import { startOver } from '../../actions';

class Score extends React.Component {
  render() {
    const { favorites, history, playAgain } = this.props;

    let num = favorites.length;

    // don't show this page unless more than 4 favorites
    if (!num) {
      history.push("/");
    }

    let sum = favorites.reduce((a, b) => a + b.weirdness, 0);
    let score = Math.round(sum / num);

    return (
      <Container className="text-center mt-3">
        <h6>You scored {score} out of 10</h6>
        <Row className="m-4">
          {favorites.map(gif => {
            const { url, title, weirdness, id } = gif;
            return (
              <GifCard url={url} title={title} imgSize={100} cardSize={150} key={id}>
                <span>{weirdness}/10</span>
              </GifCard>
            )
          })
          }
        </Row>
        <Button variant="light" onClick={playAgain}>Start Over</Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { favorites } = state;

  return { favorites };
}

function mapDispatchToProps(dispatch) {
  return {
    playAgain: () => {
      dispatch(startOver());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Score));
