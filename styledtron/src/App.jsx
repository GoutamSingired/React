import React from 'react';
import { Provider } from 'styletron-react';
//import { Client as Styletron } from 'styletron-engine-atomic';


const engine = new Styletron();

function App() {
  return (
    <Provider value={engine}>
       {/* your other components go in here */}
    </Provider>
  )
}

export default App;
