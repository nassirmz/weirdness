import React from 'react';
import { connect } from 'react-redux';
import { likeGif } from '../../actions';
import { Button } from 'react-bootstrap';

class Like extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { gif, addGifToFavorites } = this.props;
    addGifToFavorites(gif);
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
