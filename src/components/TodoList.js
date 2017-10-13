import React from 'react';
import Todo from './Todo';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.data.map(item => {
            return <Todo key={ item.id } item={ item } remove={ this.props.remove } />
        });
    
        return (
            <div>
                {list}
            </div>
        )
    }
}
export default TodoList;