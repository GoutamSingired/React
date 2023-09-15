import React from 'react';
import StyledBox from './components/StyledBox';
import SomeOtherComponent from './components/SomeOtherComponent';

function App(){
  return (
    <div>
        <StyledBox bgColor={"blue"}/>
        <StyledBox bgColor={"red"} height={"200px"}/>
    </div>
  )
}

export default App;