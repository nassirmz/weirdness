import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import './index.css';

import RoundButton from '../button/RoundButton';

import { resetMessage } from '../../actions';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.message) {
      return { show: true }
    }
    return null;
  }

  handleClose = () => {
    const { clearMessage } = this.props;
    clearMessage();

    this.setState({show: false });
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <Modal className="Message"
               show={this.state.show}
        >
            <p>{message}</p>
            <RoundButton handleClick={this.handleClose} content="X" />

        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearMessage: () => {
      dispatch(resetMessage());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
