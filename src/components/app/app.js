import React , { Component } from 'react';
//import ReactDOM from 'react-dom';


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
        ]
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
                if (item.id === id){
                    item[propName] = !item[propName];
                }
                return item;
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

    render(){

        const { todoData } = this.state;
        const doneCount = todoData.filter(el=> el.done).length;
        const allTodo = todoData.length;
        const todoCount = allTodo - doneCount;

        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} allTodo={allTodo}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={ this.delItem }
                    onImportant={ this.onToggleImportant }
                    onDone={ this.onToggleDone }
                />
                <AddItem onAdd={this.addItem}/>
            </div>
        );
    }

}
