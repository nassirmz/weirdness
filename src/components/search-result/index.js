import React from 'react';
import { connect } from 'react-redux';
import { Col, Container} from 'react-bootstrap';

import { startGetGif } from '../../actions';

import GifImage from '../gif';

class SearchResult extends React.Component {

  render() {
    const { url, title } = this.props.gif;
    return (
      <Container>
        <Col>
          <label>YOUR RESULT</label>
          <GifImage url={url} title={title} imgSize={150} cardSize={300} >
          </GifImage>
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
