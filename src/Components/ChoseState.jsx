import React from 'react'

function ChoseState({setState},{state}) {

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
    </div>
  );
}

export default ChoseState;
