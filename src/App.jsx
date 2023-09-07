import './App.css'
import PersonCard from './components/PersonCard';
import React from 'react'
import UserForm from './components/UserForm';

function App() {

  return (
    <>
        <div className="App">
            <PersonCard title={"Doe Jane"} age={45} haircolor={"black"}/>
            <PersonCard title={"Smith Jhon"} age={88} haircolor={"brown"}/>
            <PersonCard title={"Filmore Millard"} age={50} haircolor={"brown"}/>
            <PersonCard title={"Smith Maria"} age={62} haircolor={"brown"}/>
        </div>
        <div>
          <UserForm />
        </div>

    </>
  )

}

export default App
