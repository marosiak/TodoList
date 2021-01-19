import React from 'react'
import TodoItem from "./TodoItem";
import { TodoItemData, TodoListProps } from './types';

const TodoList:React.FC<TodoListProps> = (props) => {
    const { todos = [] } = props
    return (
        <div className="todo__list">
            <div className="todo__grid">
                {
                    todos.map((item: TodoItemData, index: number) =>
                        <TodoItem
                            key={`todo__item-${index}`}
                            title={item.title}
                            body={item.body}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default TodoList
