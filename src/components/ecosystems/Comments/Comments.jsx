import React from 'react';
import CommentsContainer from 'components/organisms/CommentsContainer/CommentsContainer';
import AddComment from 'components/molecules/AddComment/AddComment';
import Title from 'components/atoms/Title/Title';
import './Comments.css';


const Comments = ({ activeItem }) => {
  if (!activeItem.id) return null;
  return (
    <div className="eco-comments-wrapper">
      <div className="eco-comments">
        <Title text={`Comments #${activeItem.index + 1}`} className="atm-comments-title" />
        <CommentsContainer />
        <AddComment />
      </div>
    </div>
  );
};

export default Comments;
