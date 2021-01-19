import React, { memo } from 'react';
import { TodoItemData } from './types';

const TodoItem: React.FC<TodoItemData> = (data) => {
    const { title, body } = data;
    return (
        <div className="todo__item">
            <h1 className="todo__h1">{title}</h1>
            <p className="todo__p">{body}</p>
        </div>
    );
};

export default memo(TodoItem);
