import React from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { startGetGif } from '../../actions';

class Slider extends React.Component {
  handleChange = (e) => {
    const { loadGif, gif } = this.props;
    const { term } = gif;
    const weirdness = e.target.value;

    loadGif(term, weirdness);
  };
  render() {
    const { weirdness } = this.props.gif;
    return (
      <Container className="mt-4">
      <ReactBootstrapSlider
        value={weirdness}
        slideStop={this.handleChange}
        step={1}
        max={10}
        min={0}
      />
      <p>weirdness level <span>{weirdness}</span></p>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadGif: (term, weirdness) => {
      dispatch(startGetGif(term, weirdness));
    }
  };
}

function mapStateToProps(state) {
  const { gif } = state;
  return {
    gif
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider);
