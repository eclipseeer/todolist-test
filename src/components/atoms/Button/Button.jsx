import React from 'react';
import './Button.css';

const Button = ({ title, onClick, className }) => (
  <button className={className} type="button" onClick={onClick}>
    {title}
  </button>
);

export default Button;
