import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(15);

  function addValue() {
    if (Counter < 21) {
      setCounter(Counter + 1);
    }
  }

  function removeValue() {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  }

  return (
    <>
      <h1>Piyush Ghate</h1>
      <h2>Counter Value : {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;