import { observer } from 'mobx-react-lite'
import React from 'react'
import todo from './store/todo'

const TodoComponent = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}></button>
      {todo.todos.map(t => 
        <div className='todo' key={t.id}>
          <input type="checkbox" checked={t.completed} onClick={() => todo.completeTodo(t.id)}/>
          {t.title}
          <button onClick={() => todo.remoteTodo(t.id)}>X</button>
        </div>
      )}
    </div>
  )
})

export default TodoComponent