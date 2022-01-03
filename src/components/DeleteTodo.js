import React from 'react'

export default function DeleteTodo({todos, setTodos}) {
    function handleDeleteTodo(){
        const confirmed = window.confirm('do u want to delete this?');
        if (confirmed){

        }
    }

    return (
        <span 
            onClick={handleDeleteTodo}
            role="button" 
            style={{
                color: 'red',
                fontWeight: 'bold',
                marginLeft: 10,
                cursor: 'pointer'
            }}>
            X   
        </span>
    )
}
