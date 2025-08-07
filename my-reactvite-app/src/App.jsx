import React, { createContext, useEffect, useState } from "react";
import Counter from "./assets/components/Counter";
import Card from "./assets/components/Card";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Counter />
        <Card />
      </CountContext.Provider>
    </div>
  );
}

export default App;
