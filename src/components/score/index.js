import React from 'react';
import { connect } from 'react-redux';

import { Row, Container } from 'react-bootstrap';

import GifCard from '../gif';

class Score extends React.Component {
  render () {
    const { favorites } = this.props;
    let num = favorites.length;
    let sum = favorites.reduce((a, b) => a  + b.weirdness , 0);
    console.log("sum", sum);
    let score = Math.round(sum / num);

    return (
      <Container className="text-center mt-3">
        <span>You scored {score} out of 10</span>
        <Row className="mt-4">
          {favorites.map(gif => {
            const { url, title, weirdness } = gif;
            return (
              <GifCard url={url} title={title} imgSize={100} cardSize={150}>
                <span>{weirdness}/10</span>
              </GifCard>
            )
          })
          }
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { favorites } = state;

  return { favorites };
}

export default connect(
  mapStateToProps
)(Score);
