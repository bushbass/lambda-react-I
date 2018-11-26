import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  state = {
    todoArray: [{ task: "laundry", id: Date.now(), completed: false }],
    currentTodo: ""
  };

  handleInputChange = event =>
    this.setState({ currentTodo: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const newEventObject = {
      completed: false,
      id: Date.now(),
      task: this.state.currentTodo
    };
    this.setState({
      todoArray: [...this.state.todoArray, newEventObject],
      currentTodo: ""
    });
  };

  handleItemClick = id => {
    this.setState({
      todoArray: [...this.state.todoArray].map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      })
    });
  };

  handleClearCompleted = () => {
    this.setState({
      todoArray: [...this.state.todoArray].filter(
        todo => todo.completed !== true
      )
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to Alex's Todo App! test</h2>

        <TodoList
          handleItemClick={this.handleItemClick}
          todoArray={this.state.todoArray}
        />

        <TodoForm
          currentTodo={this.state.currentTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
