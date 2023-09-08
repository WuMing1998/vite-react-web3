import { useState } from "react";
import "./App.css";
import PetShow from "./components/PetShow";

function App() {
  const [count, setCount] = useState(0);

  const testPet = {
    element: undefined,
    parts: undefined,
    femaleInfoDetail: undefined,
    maleInfoDetail: undefined,
    propCounts: undefined,
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <PetShow pet={testPet} cracking={false}></PetShow>
    </>
  );
}

export default App;