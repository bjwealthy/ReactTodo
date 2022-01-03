import React from 'react';

function TodoList({todos, setTodos}) {
    function handleToggleTodo({todo, setTodos}){
        const updatedTodos = todos.map(
            (t) => t.id === todo.id 
            ? 
            {...t, done: !t.done} : t);
        todos(updatedTodos)
    }
    
    if(!todos.length){
        return<p>No todos left</p>
    }
    
    return (
        <ul>
            {todos.map((todo) => (
                <li 
                    onDoubleClick={() => handleToggleTodo(todo)} 
                    style={{textDecoration: todo.done ? 'line-through' : ""}} 
                    key={todo.id}>{todo.text} : {todo.done.toString()}
                </li>
            ))}
        </ul>
    );
}

export default TodoList
