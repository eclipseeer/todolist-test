import React from 'react';
import Comment from 'components/molecules/Comment/Comment';
import { Consumer } from 'contexts';
import './CommentsContainer.css';


const CommentsContainer = ({ comments }) => (
  <div className="org-comments-container">
    {comments.map((el, i) => (
      <Comment key={i} text={el} index={i} />
    ))}
  </div>
);

export default () => (
  <Consumer>
    {({ comments, activeItem }) => (
      <CommentsContainer comments={comments[activeItem.id]} />
    )}
  </Consumer>
);
