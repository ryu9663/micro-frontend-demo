import { useState } from "react";
import { Button } from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Host Application</h1>
      <Button onClick={() => setCount((count) => count + 1)}>안녕</Button>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
