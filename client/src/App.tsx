import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("count", count, setCount);

  return <div className="app">App</div>;
}

export default App;
