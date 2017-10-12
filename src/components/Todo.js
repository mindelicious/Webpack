import React from  'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                { this.props.item.text }
                <button onClick={ () => this.props.remove(this.props.item.id)}>X</button>
            </li>
        )
    }
}

export default Todo;