// src/ShoppingList.js
import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

