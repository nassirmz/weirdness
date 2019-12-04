import React from 'react';
import { connect } from 'react-redux';
import { startGetGif } from '../../actions';

import { Button, Col, Container, FormControl, InputGroup } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  handleClick = (e) => {
    console.log("handleClicked");
    const { weirdness, loadGif } = this.props;
    const { term } = this.state;
    loadGif(term);
  };

  handleChange = (e) => {
    console.log("onChangegettingCalled", e);
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <Container>
        <Col sm={6}>
          <label>Search term</label>
          <InputGroup className="mb-3">
            <FormControl
              size="sm"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button
                variant="secondary"
                size="sm"
                onClick={this.handleClick}
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadGif: (term) => {
      dispatch(startGetGif(term));
    }
  };
}

function mapStateToProps(state) {
  const { gif } = state;
  return {
    weirdness: gif.weirdness,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
