import React from 'react';
import { Consumer } from 'contexts';
import Avatar from 'components/atoms/Avatar/Avatar';
import Textarea from 'components/atoms/Textarea/Textarea';
import './AddComment.css';

class AddComment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    this.setTextArea = el => this.textArea = el;
  }

  addComment(e) {
    const { value } = this.textArea;
    if (e.key === 'Enter' && e.ctrlKey && value) {
      const { addComment, id } = this.props;
      addComment(id, value);
      this.textArea.value = '';
    }
  }

  render() {
    return (
      <div
        role="presentation"
        className="mol-add-comment"
        onKeyDown={this.addComment}
      >
        <Avatar color="grey" />
        <Textarea
          className="atom-add-comment-textarea"
          textAreaRef={this.setTextArea}
        />
      </div>
    );
  }
}

export default () => (
  <Consumer>
    {({ addComment, activeItem }) => (
      <AddComment addComment={addComment} id={activeItem.id} />
    )}
  </Consumer>
);
