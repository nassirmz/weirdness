import React from 'react';
import { connect } from 'react-redux';
import { Col, Container } from 'react-bootstrap';

import GifCard from '../gif';
import Like from './Like';

import Slider from '../slider';
import Message from '../message';

class SearchResult extends React.Component {

  render() {
    const { url, title } = this.props.gif;
    if (!url) return '';

    return (
      <Container>
        <Col>
          <h6>YOUR RESULT</h6>
          <GifCard url={url} title={title} imgSize={150} cardSize={300}>
            <Like/>
            <Slider/>
          </GifCard>
          <Message />
        </Col>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { gif } = state;
  return {
    gif
  };
}

export default connect(
  mapStateToProps,
)(SearchResult);
