import React from 'react';
import Item from 'components/molecules/Item/Item';
import { Consumer } from 'contexts';
import './ItemsContainer.css';


const ItemsContainer = ({ items }) => (
  <div className="org-items-container">
    {items.map((el, i) => (
      <Item key={el.id} item={el} index={i} />
    ))}
  </div>
);

export default () => (
  <Consumer>
    {({ items }) => <ItemsContainer items={items} />}
  </Consumer>
);
