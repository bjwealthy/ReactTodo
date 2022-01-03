import TodoList from './components/TodoList'

import './App.css';
import AddTodo from './components/AddTodo';
import React from 'react';
import DeleteTodo from './components/DeleteTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, text: "do first", done: true},
    {id: 2, text: "do second", done: false},
    {id: 3, text: "do third", done: true},
  ])
 
  return (    
    <div className="App">
      <h1>Todo List</h1>
        <TodoList todos={todos}/>
        <AddTodo setTodos={setTodos}/>
        <DeleteTodo />
    </div>
    
  );
}

export default App;
