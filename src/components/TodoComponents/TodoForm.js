import React from 'react';

export default class TodoForm extends React.Component {
  render(props) {
    return (
      <div>
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <div className="form-group form-inline ml-5">
              <input
                className="form-control"
                type="text"
                onChange={this.props.handleInputChange}
                value={this.props.currentTodo}
                placeholder="enter a todo"
              />
              <button className="btn btn-primary ml-1">Add To do</button>
            </div>
          </form>
        </div>
        <div className="form-group ml-5">
          <button
            className="btn btn-primary"
            onClick={this.props.handleClearCompleted}
          >
            Clear Completed Todos
          </button>
        </div>
      </div>
    );
  }
}
