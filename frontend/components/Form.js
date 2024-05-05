import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }
  handleInputChange = e => {
    this.setState({ inputText: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputText.trim() !== ''){
      this.props.addTodo(this.state.inputText);
      this.setState({ inputText: ''})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        value={this.state.inputText}
        onChange={this.handleInputChange}
        placeholder="Enter your todo"
        />
      <button type='submit'>Add Todo</button>
      <button type='button' onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    )
  }
}
