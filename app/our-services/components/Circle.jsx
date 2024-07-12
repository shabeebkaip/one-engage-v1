import React from 'react';

const Circle = ({ backgroundColor, text, textColor }) => {
  const circleStyle = {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: textColor,
    fontSize: '24px',
  };

  return (
    <div style={circleStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default Circle;
