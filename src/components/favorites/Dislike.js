import React from 'react';

const Dislike = (props) => {
  const { handleClick } = props;
  return (
    <button className="Dislike" onClick={handleClick}>x</button>
  );
};

export default Dislike;
