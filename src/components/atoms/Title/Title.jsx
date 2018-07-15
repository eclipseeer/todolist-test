import React from 'react';
import './Title.css';

const Title = ({ text, className }) => (
  <h3 className={className}>
    {text}
  </h3>
);

export default Title;
