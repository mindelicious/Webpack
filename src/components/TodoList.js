import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const elements = this.props.data.map(item => {
            return <Todo key={ item.id } item={ item } remove={ this.props.remove } />
        });

        return (
            <ul>
                { elements }
            </ul>
        )
    }
}

export default TodoList;