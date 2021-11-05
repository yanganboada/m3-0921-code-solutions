import React from 'react'
import PageTitle from './page-title'
import TodoList from './todo-list'
import TodoForm from './todo-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({todos}))
      .catch(err => console.error(err.message))
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(newTodo => this.setState({todos: ([...this.state.todos, newTodo])}))
      .catch(err => console.error(err.message))
  }

  toggleCompleted(todoId) {
    let toggleComleted = null
    let todoIndex = null

    this.state.todos.forEach((todo, index) => {
      if (todo.todoId === todoId) {
        toggleComleted = !todo.isCompleted
        todoIndex = index
      }
    })

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: toggleComleted })
    })
      .then(res => res.json())
      .then(res => this.setState(state => {
        const todos = [...this.state.todos]
        todos[todoIndex] = res
        return { todos }
      }))
      .catch(err => console.error(err.message))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    )
  }
}
