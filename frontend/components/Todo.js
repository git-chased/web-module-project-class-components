import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <input
        type='checkbox'
        checked={this.props.completed}
        onChange={() => this.props.toggleCompleted(this.props.id)}
        />
        <span>{this.props.task}</span>
      </div>
    )
  }
}
// export default Todo