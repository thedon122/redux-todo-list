import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo , deleteTodo } from '../actions/todoActions'

class Todos extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => this.props.toggleTodo(todo.id)} //Why do we wrap this in an arrow function?
          >
          
            {todo.task}: {todo.completed.toString()}
            <button>Edit</button>
            <button onClick={() => this.props.deleteTodo(todo.id)}>Delete</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(Todos)