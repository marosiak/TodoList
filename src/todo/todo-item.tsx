import React from 'react'


export interface TodoItemData {
    title: string
    body: string
}

export const TodoItem = (data: TodoItemData) => {
    return (
        <div className="todo__item">
            <h1 className="todo__h1">{data.title}</h1>
            <p className="todo__p">{data.body}</p>
        </div>
    );
};
