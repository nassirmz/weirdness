import React from 'react';

import './RoundButton.css';

const RoundButton = (props) => {
  const { handleClick, content } = props;
  return (
    <button className="RoundButton" onClick={handleClick}>{content}</button>
  );
};

export default RoundButton;
