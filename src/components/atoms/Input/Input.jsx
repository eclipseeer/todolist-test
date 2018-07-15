import React from 'react';
import './Input.css';

const Input = ({ inputRef, className, placeholder }) => (
  <input
    type="text"
    ref={inputRef}
    className={className}
    placeholder={placeholder}
  />
);

export default Input;
