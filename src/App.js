import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 1000);
  }, []);

  return (
    <div>
      <h1 data-testid='value-elem'>{inputValue}</h1>
      {toggle === true && <div data-testid='toggle-elem'>toggle </div>}
      {data && <div style={{ color: "red" }}> data</div>}
      <h1> Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        placeholder='input value......'
      ></input>
    </div>
  );
}

export default App;
