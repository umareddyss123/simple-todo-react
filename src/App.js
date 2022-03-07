import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './Listitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faL, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      ],
      currentItem: {
        text: '',
        key: '',
        completed: false
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: '',
          completed: false
        }
      })
    }

  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  completeItem(key, completed) {
    const items =  this.state.items.map(item => item.key === key ? {...item, completed}: item);
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">

        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input type="text" placeholder="What needs to be done?"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit"> Add</button>
          </form>
        </header>
        <h2>Todo List</h2>
        <ListItem items={this.state.items}
          deleteItem={this.deleteItem} completeItem={this.completeItem}></ListItem>
      </div>
    );
  }

}

export default App;
