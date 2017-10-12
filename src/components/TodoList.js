import React from 'react';

const Todo = ({todo, remove}) => {
    return (
        <li>{todo.text} <button onClick={() => remove(todo.id)}>X</button></li>
    )
}

const TodoList = ({data, remove}) => {
    const List = data.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} />
        );
    });
    return (
        <div>
            {List}
        </div>
    )
}
export default TodoList;