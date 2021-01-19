import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProps, TodoFormData } from './types';

const TodoForm: React.FC<FormProps> = ({ addTodo }) => {
    const {register, handleSubmit, errors} = useForm<TodoFormData>()

    const onSubmit = handleSubmit((data) => {
        addTodo(data.title, data.body)
    })

    return (
        <div className="todo__form">
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" ref={register({ required: true })} type="text" />
                    {
                        errors.title && <p>The title cannot be empty</p>
                    }
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <input id="body" name="body" ref={register({ required: true })} type="text" />
                    {
                        errors.body && <p>The body cannot be empty</p>
                    }
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TodoForm;
