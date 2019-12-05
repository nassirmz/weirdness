import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import GifCard from '../gif';
import RoundButton from '../button/RoundButton';

import { unlikeGif } from '../../actions';

class ListItem extends React.Component {
  handleClick = () => {
    const { removeFavoredGif, gif } = this.props;
    removeFavoredGif(gif.id);
  };

  render() {
    const { url, title } = this.props.gif;
    return (
      <Col md={4}>
        <GifCard url={url} title={title} imgSize={120} cardSize={150}>
          <RoundButton handleClick={this.handleClick} content="X" />
        </GifCard>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { favorites } = state;
  return {
    favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFavoredGif: (gifId) => {
      dispatch(unlikeGif(gifId));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
