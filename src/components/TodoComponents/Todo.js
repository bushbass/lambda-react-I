import React from 'react';

export default class Todo extends React.Component {
  render(props) {
    return (
      <div className="mb-2">
        {!this.props.task.completed ? (
          <li onClick={() => this.props.handleItemClick(this.props.task.id)}>
            {this.props.task.task}
          </li>
        ) : (
          <li
            onClick={() => this.props.handleItemClick(this.props.task.id)}
            className="completed"
          >
            {this.props.task.task}
          </li>
        )}
      </div>
    );
  }
}
