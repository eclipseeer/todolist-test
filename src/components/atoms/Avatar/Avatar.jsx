import React from 'react';
import './Avatar.css';

const Avatar = ({ color }) => (
  <div className={`atm-avatar avatar-${color}`} />
);

export default Avatar;
