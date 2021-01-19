import React, { useState } from 'react';import './App.css';
import { TodoList, TodoForm } from "./TodoList";
import { TodoItemData } from './TodoList/types'

const App = () => {
  const [todos, setTodos] = useState<TodoItemData[]>([]);

  let addTodo = (title: string, body: string) => {
      setTodos((prevState) => {
        const t = [...prevState];
        t.push({title, body});
        return t;
      });
  };
  
  return (
    <div className="app">
      <div className="todo__app">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </div>
    </div>
  )
};

export default App;
