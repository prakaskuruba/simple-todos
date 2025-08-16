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
     newTodo: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }
   onChangeInput = event => {
    this.setState({ newTodo: event.target.value })
  }
    addTodo = () => {
    const { newTodo, todosList } = this.state
    if (newTodo.trim() !== '') {
      const newTask = { id: Date.now(), title: newTodo }
      this.setState({
        todosList: [...todosList, newTask],
        newTodo: '',
      })
    }
  }
   updateTodo = (id, updatedTitle) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      ),
    }))
  }

  render() {
    const {todosList, newTodo} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          

<div className="add-todo">
  <input
    type="text"
    value={newTodo}
    onChange={this.onChangeInput}
    placeholder="Enter a new todo"
    className="input-box"
  />
  <button type="button" className="add-btn" onClick={this.addTodo}>
    Add
  </button>
</div>
          <ul className="todos-list">
            
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
