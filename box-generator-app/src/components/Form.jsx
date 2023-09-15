import React, {useState} from "react";

const Form = (props) => {
    const {isBoxVisible, setIsBoxVisible} = props;
    const {color, setColor} = props;

    const boxHandle = (e) => {
        e.preventDefault();

        setIsBoxVisible([...isBoxVisible, color]);
        setColor(" ");
    }


    let movies = ['leo', 'salar', 'tupaki', 'jawan']
    const MyComponent = props => {
        const onClickHandler = (e) => {
            alert("You have clicked the button");
        }

        return props.movies.map( (item, index) => {
            return <button onClick={ onClickHandler }>{ item }</button>
        });
    }

    // return(
    //     <>
    //         <form onSubmit={boxHandle}>
    //             <label>Color</label>
    //             <input type="text" value={color} onChange={ (e) => setColor(e.target.value)} />

    //             <button>Add</button>
    //         </form>
    //     </>
    // )

}

export default Form;