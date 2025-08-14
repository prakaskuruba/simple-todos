import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'HTML',
  },
  {
    id: 2,
    title: 'CSS',
  },
  {
    id: 3,
    title: 'jAVASCRIPT',
  },
  {
    id: 4,
    title: 'REACT',
  },
  {
    id: 5,
    title: 'BOOTSTRAP',
  },
  {
    id: 6,
    title: 'JAVA',
  },
  {
    id: 7,
    title: 'SQL',
  },
  {
    id: 8,
    title: 'DSA',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
