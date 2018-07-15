import React from 'react';
import './Counter.css';

const Counter = ({ quantity }) => (
  quantity === 0 ?
    null :
    (<span className="atom-counter">
      {quantity}
    </span>)
);

export default Counter;
