import { useState } from 'react'
import './App.css'
function App() {
      let [todoInput, updateInput] = useState()

      let [todoList, updateTodos] = useState(
            [
                  {
                        id: 1,
                        task: 'Learn React'

                  },
                  {
                        id: 2,
                        task: 'Learn Angulr'

                  }
            ]
      )

      let nextId = 3

      function addNewTodo() {

            if (todoInput == "") {
                  alert("Add some task")
            }
            else {

                  let newTodos = [
                        ...todoList,
                        {
                              id: nextId++,
                              task: todoInput

                        }
                  ]
                  updateTodos(newTodos);
                  updateInput("")
            }

      }

      function deleteTodo(id) {
            let filteredTodos = todoList.filter(
                  (todo) => {
                        return todo.id != id

                  }
            )
            updateTodos(filteredTodos)



      }


      return (
            <div>
                  <h3>Todo App using React</h3>
                  <div>
                        <input onChange={(e) => {
                              let task = e.target.value;
                              updateInput(task)

                        }} type='text' value={todoInput} />
                        <button onClick={() => {
                              addNewTodo()
                        }}>Add</button>
                  </div>
                  <ul>
                        {
                              todoList.map(
                                    (todo) => {
                                          return (
                                                <li key={todo.id}>
                                                      <p>{todo.task}</p>
                                                      <button onClick={() => {
                                                            deleteTodo(todo.id)
                                                      }}> ❌</button>
                                                </li>
                                          )
                                    }
                              )
                        }


                  </ul>
            </div>
      )




}

export default App