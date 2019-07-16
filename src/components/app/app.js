import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";


const todoData = [
    {label: 'First item', important: false, id: 1},
    {label: 'Second item', important: true, id: 2},
    {label: 'Three item', important: false, id: 3}
];

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;