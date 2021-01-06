import React from 'react'
import { useState } from 'react';
import { TodoForm } from './todo/todo-form'
import { TodoList, TodoListProps} from './todo/todo-list'
import { TodoItemData } from "../src/todo/todo-item"

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItemData[]>([]);

    let addTodo = (title: string, body: string) => {
        const t = todos.slice();
        t.push({title, body});
        setTodos(t);
  };
  
  let todoListProps: TodoListProps = {todos: todos}
  return (
    <div className="todo__app">
      <TodoForm addTodo={addTodo}/>
      <TodoList props={todoListProps}/>
    </div>
  )
}