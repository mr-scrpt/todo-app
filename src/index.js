import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'


const todoData = [
    {label: 'First item', important: false},
    {label: 'Second item', important: true},
    {label: 'Three item', important: false}
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


ReactDOM.render(<App/>, document.getElementById('root'));