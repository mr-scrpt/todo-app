import React , { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';


export default class App extends Component {
    startId = 1;
    state = {
        todoData: [
            this.createTodoItem('First item'),
            this.createTodoItem('Second item'),
            this.createTodoItem('Three item')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label){
        return {label, important: false, id: this.startId++, done: false}
    };

    delItem = (id) => {
      this.setState(state=>{
          const res =  state.todoData.filter(item => item.id !== id);
          return {
              todoData: res
          }

      })
    };

    addItem = (text) =>{
        if(text){
            this.setState(( { todoData } ) =>{
                const res = [...todoData, this.createTodoItem(text)];

                return{
                    todoData: res
                }
            })
        }


    };
    toggleProperty(propName, id){
        this.setState(({ todoData }) =>{
            const res = todoData.map(item => {

                let clone = item;
                if (item.id === id){
                    clone[propName] = !clone[propName];
                }
                return clone;
            });

            return {
                todoData: res
            }
        });
    };

    onToggleImportant = ( id )=> {
        this.toggleProperty('important', id);
    };

    onToggleDone = ( id )=> {
        this.toggleProperty('done', id);
    };

    search = (items, term) => {
        if (!term){
            return items;
        }

        return  items.filter(item=>{
            return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1;
        });


    };
    onSearch = (term) =>{
        this.setState({term})
    };

    filter = (items, filter) =>{

        switch (filter) {
            case 'all': return items;

            case 'active': return items.filter(item=>!item.done );

            case 'done': return items.filter(item=>item.done);

            default: return items;
        };


    };
    onFilterChange = (name)=>{
        this.setState({
            filter: name
        })
    };
    render(){

        const { todoData, term, filter } = this.state;

        const visibleItem = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter(el=> el.done).length;
        const allTodo = todoData.length;
        const todoCount = allTodo - doneCount;

        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} allTodo={allTodo}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    todos={ visibleItem }
                    onDeleted={ this.delItem }
                    onImportant={ this.onToggleImportant }
                    onDone={ this.onToggleDone }
                />
                <AddItem onAdd={this.addItem}/>
            </div>
        );
    }

}
