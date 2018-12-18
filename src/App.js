import React from 'react';
import Title from './components/TodoComponents/Title';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [{ task: 'laundry', id: Date.now(), completed: false }],
      currentTodo: ''
    };

    // console.log('constructor ', this.state.todoArray);
  }

  componentDidMount() {
    // console.log(
    //   'componentDidMount - before accessing local storage',
    //   this.state.todoArray
    // );
    if (!localStorage.todoListState) {
      localStorage.setItem(
        'todoListState',
        JSON.stringify(this.state.todoArray)
      );
    }

    const localTodoArray = JSON.parse(localStorage.todoListState);
    this.setState({
      todoArray: localTodoArray
    });
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate - ', this.state.todoArray);
    localStorage.setItem('todoListState', JSON.stringify(this.state.todoArray));
  }

  handleInputChange = event => {
    this.setState({ currentTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newEventObject = {
      task: this.state.currentTodo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoArray: [...this.state.todoArray, newEventObject],
      currentTodo: ''
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
      <div className="main m-5">
        <Title />
        <TodoList
          className="todo-list"
          handleItemClick={this.handleItemClick}
          todoArray={this.state.todoArray}
        />
        <TodoForm
          className="todo-form"
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
