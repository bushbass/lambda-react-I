import React from 'react';
import Todo from './Todo';
import './Todo.css';

export default class TodoList extends React.Component {
  render(props) {
    return (
      <div className="mb-20">
        <p className="mt-3" style={{ fontSize: '1.3rem' }}>
          To Dos
        </p>
        {this.props.todoArray.map(todoItem => (
          <Todo
            key={todoItem.id}
            handleItemClick={this.props.handleItemClick}
            task={todoItem}
          />
        ))}
      </div>
    );
  }
}
