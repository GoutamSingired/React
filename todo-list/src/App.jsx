import React, {useState} from 'react';
import Form from './Componenets/Form';
import Display from './Componenets/Display';


function App(){
  const [todoInput, setTodoInput] = useState("")
  const [todoList, setTodoList] = useState([])
  
  return (
    <>
  
      < Form  todoList={todoList} setTodoList={setTodoList} todoInput={todoInput} setTodoInput={setTodoInput} />
      < Display  todoList={todoList} todoInput={todoInput} setTodoInput={setTodoInput} />

    </>
  ) 

}
export default App;


