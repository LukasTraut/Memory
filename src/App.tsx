import "./styles.css";
import MemoryTable from "./components/MemoryTable"

function App() {
  return (
    <>
      <head>
        <title>Memory: The Game</title>
      </head>
      <header>
        <h1>Memory: The Game</h1>
      </header>
      <div className="App">
        <MemoryTable initialColumns={6} initialRows={4} />
      </div>
      <footer>
        <p>Memory: The Game created by Lukas Traut</p>
      </footer>
    </>
  );
}

export default App;
