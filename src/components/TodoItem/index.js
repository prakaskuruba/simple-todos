import { useState } from 'react'
import './index.css'


const TodoItem = props => {
  const {todoDetails, deleteTodo,updateTodo} = props
  const {id, title} = todoDetails
   const [isEditing, setIsEditing] = useState(false)
   const [editedTitle, setEditedTitle] = useState(title)
    const onSaveEdit = () => {
   if (editedTitle.trim() !== '') {
     updateTodo(id, editedTitle)
     setIsEditing(false)
   }
 }


  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      {isEditing ? (
       <input
          type="text"
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p className="title">{title}</p>
     )}

     <div className="actions">
       {isEditing ? (
          <button className="save-btn" onClick={onSaveEdit}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        )}
                <button className="delete-btn" onClick={onDeleteTodo}>Delete</button>
     </div>
    </li>
  )
}

export default TodoItem
