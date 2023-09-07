import React, {useState} from 'react';


const PersonCard = (props) => {
    const [intialAge, setAge] = useState(props.age)
    return(
        <div>
            <h2>{props.title}</h2>
            <p>Age: {intialAge}</p>
            <p>Hair Color: {props.haircolor}</p>
            <button onClick={() => setAge(intialAge + 1)}>Birthday Button for {props.title}</button>
        </div>
    )
}

export default PersonCard;