
import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import Matrix from "./Matrix.jsx";
import Stats from "./Stats.jsx";

import { START, incrementAt, decrementAt, zeros } from "./matrix.js";

export default function App() {
  // Section 07: Store the matrix in React state.
  const [matrix, setMatrix] = useState(START);

  return (
    <main className="app">
      <Header />
      <Matrix matrix={matrix} />
    </main>
  );
}
