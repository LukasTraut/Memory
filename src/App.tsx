import "./styles.css";
import { useState } from "react";
import MemoryTable from "./components/MemoryTable"





function App() {

  const [counter, setCounter] = useState(0);
  const [matches, setMatches] = useState(0);

  return (
    <>
      <head>
        <title>Memory: The Game</title>
      </head>
      <header>
        <h1>Memory: The Game</h1>
      </header>
      <h2>Matches {matches}/12</h2>
      <h2>Counter: {counter}</h2>


      <div className="App">
        <MemoryTable
          initialColumns={6}
          initialRows={4}
          onMatch={() => {
            setMatches((prev) => prev + 1);
            setCounter((prev) => prev + 1);
          }}
          onFail={() => setCounter((prev) => prev + 1)}
        />
      </div>

      <footer>
        <p>Memory: The Game created by Lukas Traut</p>
      </footer>
    </>
  );
}

export default App;
