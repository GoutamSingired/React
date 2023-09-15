import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {

  
  const [todoList, setTodoList] = useState([])

  return (
    <>
      <Form todoList = {todoList} setTodoList= {setTodoList}/>
    </>
  )
}

export default App
