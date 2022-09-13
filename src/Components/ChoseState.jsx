import React from 'react'
import { useState } from 'react';

function ChoseState() {
    const [state, setState] = useState('')

  return (
    <div className="App">
        <select value={state} onChange={(e) => {
            const selectedState = e.target.value;
            setState(selectedState);
         }}
        >

        <option Value="Missouri"> Missouri </option>
        <option Value="Illinois"> Illinois </option>
        <option Value="Colorado"> Colorado </option>
        <option Value="Hell"> Hell </option>
        </select>
        {state}
    </div>
  );
}

export default ChoseState;