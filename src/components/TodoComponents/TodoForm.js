import React from 'react' 

export default class TodoForm extends React.Component {
    render(props){
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
                <input type='text' 
                        onChange={this.props.handleInputChange } 
                        value={this.props.currentTodo} 
                        placeholder="enter a todo" />    
                    <button>Add To do</button>
            </form>
                
                <button onClick={this.props.handleClearCompleted}>Clear Completed</button>
            </div>
        )
    }
}