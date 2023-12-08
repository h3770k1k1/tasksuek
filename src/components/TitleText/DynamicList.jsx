import React from 'react';

const DynamicList = ({ n }) => {
  const renderListItems = () => {
    const items = [];
    for (let i = 1; i <= n; i++) {
      items.push(<li key={i}>List Item {i}</li>);
    }
    return items;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '20px',
      }}
    >
      <h2>Dynamic List with {n} Items</h2>
      <ul>{renderListItems()}</ul>
    </div>
  );
};

export default DynamicList;
