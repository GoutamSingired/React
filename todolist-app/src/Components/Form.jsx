import React, {useState} from 'react'
import '/src/App.css'

const Form = (props) => {
    // const {todoItem, setTodoItem} = props;
    const [todoItem, setTodoItem] = useState(" ");

    const {todoList, setTodoList} = props;

    const handleTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            todo: todoItem
        }
        setTodoList([...todoList, newTodo]);
        setTodoItem("")
    }
    const deleteInput = (idx) => {
        const newList = todoList.filter((value) =>  value !== idx);
        setTodoList(newList);
    };
    return(
        <>
            <form onSubmit={handleTodo}  >
                <h1> Todo App</h1>
                <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}></input>
                <button className="add">Add</button>
            </form>
            <ul>
            {
            todoList.map((value, idx) => (
                    <li key={idx}>
                        <p> <b>Index</b> {idx} 
                            <b>   Input:</b> {value.todo}
                            <button onClick={() => deleteInput(value)} className="btn">Delete</button>
                        </p>
                    </li>
                ))
            }
            </ul>
        </>
    )
}

export default Form;