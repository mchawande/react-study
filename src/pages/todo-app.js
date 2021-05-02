import React, { Component } from 'react';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            this.setState({ todos: this.state.todos.concat(e.target.value) });
            e.target.value = '';
        }
    }

    todoItems() {
        return this.state.todos.map((todo) =>
          <li key={todo} className="list-group-item">{todo}</li>
        );
    }

    render() {
        return (
            <div>
                <p>Todo App Page</p>
                <input type="text" className="form-control mb-3" onKeyUp={this.handleKeyUp} />
                <p><small><i>Hit Enter to add in list.</i></small></p>
                <ol className="list-group">
                    { this.todoItems() }
                </ol>
            </div>
        );
    }

}

export default TodoApp;
