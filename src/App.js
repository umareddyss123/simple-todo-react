import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './Listitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faL, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

library.add(faTrash);

function App() {
 const [items, setItems] =  useState([
    {
      text: 'first',
      key: '1',
      completed: false
    },
    {
      text: 'second',
      key: '2',
      completed: false
    },
  ]);
  const [currentItem, setCurrentItems] =  useState({
    text: '',
    key: '',
    completed: false 
  });

  function handleInput(e) {
    setCurrentItems({
      text: e.target.value,
      key: Date.now()
    });
  }
  function addItem(e) {
    e.preventDefault();
    const newItem = currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItems({
        text: '',
        key: '',
        completed: false
      });
    }
  }
  function deleteItem(key) {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  }
  function completeItem(key, completed) {
    const newItems = items.map(item => item.key === key ? {...item, completed}: item);
    setItems(newItems);
  }

  return (
    <div className="App">

      <header>
        <form id="todo-form" onSubmit={addItem}>
          <input type="text" placeholder="What needs to be done?"
            value={currentItem.text}
            onChange={handleInput} />
          <button type="submit"> Add</button>
        </form>
      </header>
      <h2>Todo List</h2>
      <ListItem items={items}
        deleteItem={deleteItem} completeItem={completeItem}></ListItem>
    </div>
  ); 
}

export default App;
