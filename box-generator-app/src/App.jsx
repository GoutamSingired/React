import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';


function App(){

  const [isBoxVisible, setIsBoxVisible] = useState([]);
  const [color, setColor] = useState([]);
  

  return(
    <>
        <Form  isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible} color={color} setColor={setColor} />
        <Display isBoxVisible={isBoxVisible} color={color} setColor={setColor} />
        

    </>
  )

}
export default App;