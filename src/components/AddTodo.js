import React from 'react';

export default function AddTodo({ setTodos }) {
    const inputRef = React.useRef()

    function handleAddTodo(event){
        event.preventDefault();
        const text = event.target.elements.addTodo.value;
        const todo={
            id: Math.random(),
            text,
            done: false
        };
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
        inputRef.current.value = ""
    }
    

    return (
        <form onSubmit={handleAddTodo}>
            <input placeholder='Add Todo' name='addTodo' ref={inputRef} />
            <button type='submit'>Submit</button>
        </form>
    )
    
}
