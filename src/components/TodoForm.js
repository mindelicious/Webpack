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
            <div class="adding">
                <input onChange={ (event) => this.inputChangeHandler(event.target.value) } />
                <button class="addbtn"  onClick={ () => this.props.add(this.state.inputText) }>ADD</button>
            </div>
        )
    }
}

export default TodoForm;