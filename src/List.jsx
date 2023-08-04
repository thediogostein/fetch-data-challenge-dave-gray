import React from 'react';
import ListItem from './ListItem';

function List({ data }) {
  const listElements = data.map((item) => (
    <ListItem key={item.id} item={item} />
  ));

  return <ul>{listElements}</ul>;
}

export default List;
