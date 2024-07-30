import { useState, useEffect } from "react";
import Item from "./Item";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  console.log("counter rendered");

  const clickHandler = () => {
    setCount(count + 1);
    let newItems = [...items];
    const len = newItems.length + 1;
    for (let i = len; i < len + 300; i++) {
      newItems.push(<Item data={i} key={i}></Item>);
      console.log(newItems);
      setItems(newItems);
    }
    // setItems(newItems);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={clickHandler}>click</button>
      <ul>{items}</ul>
    </div>
  );
};

export default Counter;
