import React from 'react';
import { Consumer } from 'contexts';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import './AddItem.css';

class AddItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.setInputRef = el => this.input = el;
  }

  addItem() {
    const { value } = this.input;
    if (value) {
      const { addItem } = this.props;
      addItem(value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <div className="mol-add-item">
        <Input
          inputRef={this.setInputRef}
          className="atom-add-item-input"
          placeholder="Type name here..."
        />
        <Button
          className="atom-add-item-button"
          onClick={this.addItem}
          title="Add new"
        />
      </div>
    );
  }
}

export default props => (
  <Consumer>
    {({ addItem }) => <AddItem {...props} addItem={addItem} />}
  </Consumer>
);
