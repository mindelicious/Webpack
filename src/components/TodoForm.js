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
                <button  onClik={ () => this.props.add(this.state.inptuText) }>Add</button>
            </div>
        )
    }
}

export default TododForm;