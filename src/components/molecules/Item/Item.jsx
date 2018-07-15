/*eslint-disable*/
import React from 'react';
import { Consumer } from 'contexts';
import Button from 'components/atoms/Button/Button';
import Counter from 'components/atoms/Counter/Counter';
import './Item.css';


class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  deleteItem(e) {
    const { deleteItem, item } = this.props;
    e.stopPropagation();
    deleteItem(item.id);
  }

  setActiveItem() {
    const { index, item, setActiveItem } = this.props;
    setActiveItem(item.id, index);
  }

  render() {
    const { item, activeItem, comments } = this.props;
    const isActive = activeItem.id === item.id;
    return (
      <div
        className={isActive ? "mol-item-container-active" : "mol-item-container"}
        role="presentation"
        onClick={this.setActiveItem}
      >
        <div className="mol-item-wrapper">
          <div className="mol-item-text-and-counter">
            <p className="mol-item-text">
              {item.text}
            </p>
            <Counter quantity={comments[item.id].length} />
          </div>
          <Button
            onClick={this.deleteItem}
            title="Delete"
            className="atom-delete-item-button"
          />
        </div>
      </div>
    );
  }
}


export default props => (
  <Consumer>
    {({ deleteItem, setActiveItem, activeItem, comments }) => (
      <Item
        {...props}
        deleteItem={deleteItem}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
        comments={comments}
      />
    )}
  </Consumer>
);
