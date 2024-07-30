import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [btn, setBtn] = useState("App");

  const clickHandler = () => {
    setBtn(btn === "App" ? "Hello" : "App");
  };

  return (
    <>
      <button onClick={clickHandler}>{btn}</button>
      <Counter />
    </>
  );
}

export default App;
