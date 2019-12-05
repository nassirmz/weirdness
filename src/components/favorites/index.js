import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import List from './List';
import Calculate from './calculate';

class Favorites extends React.Component {

  render() {
    const { favorites } = this.props;
    return (
      <Container className="text-center">
        <h5> YOUR LIKED GIFS </h5>
        <List favorites={favorites}/>
        <Calculate nums={favorites.length}/>
      </Container>
    );
  }

}

function mapStateToProps(state) {
  const { favorites } = state;
  return {
    favorites
  };
}

export default connect(
  mapStateToProps
)(Favorites);
