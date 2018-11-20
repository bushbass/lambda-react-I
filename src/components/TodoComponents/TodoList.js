import React from 'react'
import Todo from './Todo'
import './Todo.css'

export default class TodoList extends React.Component {
    render(props){
        return (
            <div>
            
                {this.props.todoArray.map(
                    (todoItem) => 
                    <Todo 
                        key={todoItem.id}  
                        handleItemClick={this.props.handleItemClick} 
                        task={todoItem} 
                    /> 
                )}
            </div>   
        )
    }
}