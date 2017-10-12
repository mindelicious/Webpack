import React from 'react';
import Todo from './Todo.js';

const TodoList = (data, remove) => {
    const List = data.map((Todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} />
        );
    });
    return (
        {List}
    )
}
export default TodoList;