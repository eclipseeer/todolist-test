import React from 'react';
import Avatar from 'components/atoms/Avatar/Avatar';
import './Comment.css';

const Comment = ({ text, index }) => (
  <div className="mol-comment">
    <Avatar color={index % 2 ? 'blue' : 'orange'} />
    <p className="mol-comment-text">
      {text}
    </p>
  </div>
);

export default Comment;
