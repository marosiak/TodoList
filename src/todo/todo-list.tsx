import React from 'react'
import {TodoItem} from "./todo-item";
import {TodoItemData} from "./todo-item"

export interface TodoListProps {
    todos: TodoItemData[]
}

export const TodoList = (props: TodoListProps) => {
    return (
        <div className="todo__list">
            <div className="todo__grid">
                {
                    props.todos.map((item: TodoItemData, index: number) =>
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
