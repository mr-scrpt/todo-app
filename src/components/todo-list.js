import React from 'react';
import TodoListItem from './todo-list-item'

const TodoList = ({ todos }) => {

    const elems = todos.map(item => {
        return(
            <li><TodoListItem {...item}/></li>
        )
    });
    return (
        <ul>
            {elems}
        </ul>
    )
};

export default TodoList;