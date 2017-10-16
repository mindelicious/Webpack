import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
        };
    }
    inputChangeHandler(val) {
        this.setState({inputText: val});
    }

    render() {
        return (
            <div>
                <input onChange={ (event) => this.inputChangeHandler(event.target.value) } />
                <button  onClick={ () => this.props.add(this.state.inputText) }>Add</button>
            </div>
        )
    }
}

export default TodoForm;