import React, { useState } from 'react';

function App(props) {
  const [selected, setSelected] = useState(0);

  const randomNum = () => {
    setSelected(Math.floor(Math.random() * 7));
    console.log(selected);
  }
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <button onClick={randomNum}>next anecdote</button>
    </div>
  );
}

export default App;
