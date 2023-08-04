import React from 'react';

function ListItem({ item }) {
  // return <li>{JSON.stringify(item)}</li>;
  return (
    <li>
      {Object.entries(item).map(([key, value]) => {
        return (
          <p>
            {key} : {JSON.stringify(value)}
          </p>
        );
      })}
    </li>
  );
}

export default ListItem;
