import React from 'react';import './App.css';
import {TodoList} from "./todo/todo-list";
import { TodoApp } from './TodoApp';


const App = () => {
    return (
        <div className="App">
            <TodoApp/>
        </div>
    );
};

export default App;
