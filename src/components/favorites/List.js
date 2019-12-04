import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import ListItem from './ListItem';

class List extends React.Component {

  renderList() {
    const { favorites } = this.props;

    return favorites.map(gif => {
      return (
        <ListItem gif={gif} />
      )
    })
  }

  render() {
    return (
      <Container>
        <Row>
          {this.renderList()}
        </Row>
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
)(List);
