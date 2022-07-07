import React from 'react';
export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ todos: [ this.state.text, ...this.state.todos ] });
        this.setState({ text: ''});
    }

    updateValue(e) {
        this.setState({ text: [e.target.value]})
    }

    render() {
        return(
            <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}
