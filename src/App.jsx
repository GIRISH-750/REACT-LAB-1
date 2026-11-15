
import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import Matrix from "./Matrix.jsx";
import Stats from "./Stats.jsx";

import { START, incrementAt, decrementAt, zeros } from "./matrix.js";

export default function App() {
  // Store the matrix in React state.
  const [matrix, setMatrix] = useState(START);

  // Section 08: Handle cell clicks.
  function increment(row, col) {
    setMatrix(incrementAt(matrix, row, col));
  }

  // Section 11: Load matrix data from the server.
  useEffect(() => {
    fetch("/matrix.json")
      .then((res) => res.json())
      .then((data) => setMatrix(data));
  }, []);

  return (
    <main className="app">
      <Header />

      <div className="board">
        <Matrix matrix={matrix} onIncrement={increment} />
        <Stats matrix={matrix} />
      </div>
    </main>
  );
}
