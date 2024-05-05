import React from 'react'
import ReactDom from 'react-dom'
import Form from './Form'
import TodoList from './TodoList'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    }
  }
  addTodo = task => {
    const newTodo = {
      id: Date.now(),
      task: task,
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  toggleCompleted = id => {
    const updatedTodos = this.state.todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
      this.setState({todos: updatedTodos})
  }
  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter(
      (todo) => !todo.completed
    )
    this.setState({todos: filteredTodos})
  }
  render() {
    return (
      <div>
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
      </div>
    )
  }
}
