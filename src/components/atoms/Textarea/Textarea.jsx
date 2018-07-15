import React from 'react';
import './Textarea.css';

const Textarea = ({ textAreaRef, className }) => (
  <textarea
    ref={textAreaRef}
    className={className}
  />
);

export default Textarea;
