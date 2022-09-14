import ChoseState from './Components/ChoseState'
import StatePage from './Components/StatePage'
import './App.css';
import { useState } from 'react';

function App() {
        const [state, setState] = useState("");

  return (
    <div className="App">
        <ChoseState setState={setState}/>
        <StatePage state={state} />
    </div>
  );
}

export default App;
