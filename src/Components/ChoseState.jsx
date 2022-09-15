import React from 'react'
import { states } from "./states";

function ChoseState({setState, state}) {
  return (
    <div className="App">
      <select value={state} onChange={({ target: { value }}) => {
        setState(value);
      }}
    >
      {
        states.map (data => (
          <option  value={data.abbreviation}  key={data.abbreviation}> {data.name} </option>
        ))
      }
      </select>
    </div>
  );
}

export default ChoseState;



