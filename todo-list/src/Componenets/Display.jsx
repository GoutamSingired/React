import React from "react";

const Display = (props) => {
    const { todoList } = props;

    function deleteTodo(index) {
        let filteredTodos = todoList.filter(
            (todo) => {
                    return todo
            }
        )
        setTodo(filteredTodos)
    }
        return ( 
            <>
                <ul>
                {
                    todoList.map( (todo, index) => (
                        <li key={todo} >
                            <button onClick={() => {
                                deleteTodo(index)
                            }}> Delete</button>
                        </li>
                    )
                    )
                }
                </ul>
            </>
        )
}

export default Display;