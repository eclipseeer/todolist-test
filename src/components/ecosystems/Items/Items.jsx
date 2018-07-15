import React from 'react';
import ItemsContainer from 'components/organisms/ItemsContainer/ItemsContainer';
import AddItem from 'components/molecules/AddItem/AddItem';
import Title from 'components/atoms/Title/Title';
import './Items.css';

const Items = () => (
  <div className="eco-items-wrapper">
    <div className="eco-items">
      <Title text="Items" className="atm-items-title" />
      <AddItem />
      <ItemsContainer />
    </div>
  </div>
);

export default Items;
