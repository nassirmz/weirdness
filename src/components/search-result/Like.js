import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { likeGif, addMessage } from '../../actions';

class Like extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { gif, addGifToFavorites, addSuccessMessage } = this.props;
    addGifToFavorites(gif);
    addSuccessMessage("Added to favorites. Please Search again!");
  };

  render() {
    const { gif, favorites } = this.props;
    let likedAlready = favorites.some(item => item.term === gif.term);

    return (
      <Button
        variant="light"
        size="sm"
        onClick={this.handleClick}
        disabled={likedAlready}
      >
        Like
      </Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addGifToFavorites: (gif) => {
      dispatch(likeGif(gif));
    },
    addSuccessMessage: (message) => {
      dispatch(addMessage(message));
    }
  };
}

function mapStateToProps(state) {
  const { gif, favorites } = state;
  return {
    gif,
    favorites
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
