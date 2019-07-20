import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done, allTodo}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done. Total: {allTodo}</h2>
        </div>
    );
};

export default AppHeader;