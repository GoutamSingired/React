import React from 'react';


const Form = (props) => {
    const {todoInput, setTodoInput } = props;
    const {todoList, setTodoList } = props;

    const onHandle = (e) => {
        e.preventDefault();

        setTodoList([...todoList, todoInput])
        setTodoInput(" ");
    }

    return (
        <>
            <form onSubmit={onHandle} style={{ margin: "20px" }}>
                <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value) } />
                <input type ="submit" value="Add" />
            </form>
        </>
    )

}

export default Form;