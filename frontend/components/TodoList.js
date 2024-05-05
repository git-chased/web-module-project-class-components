import React from 'react'
import Todo from './Todo'
import App from './App'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo)=> (
        <Todo key={todo.id} task={todo.task} id={todo.id} completed={todo.completed}
         toggleCompleted={this.props.toggleCompleted}
        />
        ))}
      </div>
    )
  }
}
