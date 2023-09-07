import React, {useState} from "react";

const UserForm =(props) => {
    const [username, setUsername] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [email, setEmail] = useState(" ")

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {username, password, email }
        console.log("Welcome", newUser)
        setUsername(" ");
        setPassword(" ");
        setEmail(" ");

    }

    return(
        <form onSubmit={createUser}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <input type="submit" value="CreateUser"></input>
        </form>
    );

}

export default UserForm;


