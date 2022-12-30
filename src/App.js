import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");

  const numInput = (e) => {
    if (e.target.innerText === "." && current.includes(".")) return;
    current
      ? setCurrent((prev) => prev + e.target.innerText)
      : setCurrent(e.target.innerText);
    console.log(current);
  };
  useEffect(() => {
    setResult(current);
  }, [current]);
  useEffect(() => {
    setResult("0");
  }, []);

  const handlerOperator = (e) => {
    setOperator(e.target.innerText);
    console.log(operator);
    if (current === "") return;
    if (previous !== "") {
      equal();
    }
    setPrevious(current);
    setCurrent("");

    console.log(previous);
  };

  const calcResult = (operator, current, previous) => {
    let num1 = +previous;
    let num2 = +current;
    let calc = 0;

    switch (operator) {
      case "+":
        calc = num1 + num2;
        break;
      case "-":
        calc = num1 - num2;
        break;
      case "*":
        calc = num1 * num2;
        break;
      case "/":
        calc = num1 / num2;
        break;
      default:
        // setResult(current);
        break;
    }

    setCurrent("");
    setPrevious(calc);
    setResult(current);

    console.log(current);
    console.log(previous);
  };

  const equal = (e) => {
    if (e.target.innerText === "=") {
      calcResult(operator, current, previous);
    }
  };

  const percent = () => {
    let p;
    if (current === "") return;
    p = +current / 100;
    setCurrent(p);
  };

  const plusMinus = () => {
    if (current === "") return;
    if (current.charAt(0) === "-") {
      setCurrent(current.substring(1));
    } else {
      setCurrent("-" + current);
    }
  };

  const handlerClear = () => {
    setCurrent("");
    setPrevious("");
    setResult("0");
    setOperator("");
  };
  return (
    <div className="calculator-container">
      <h1>{result !== "" || result === "0" ? result : previous}</h1>
      <button onClick={handlerClear}>AC</button>
      <button onClick={plusMinus}>+/-</button>
      <button onClick={percent}>%</button>
      <button onClick={handlerOperator}>/</button>
      <button onClick={numInput}>7</button>
      <button onClick={numInput}>8</button>
      <button onClick={numInput}>9</button>
      <button onClick={handlerOperator}>*</button>
      <button onClick={numInput}>4</button>
      <button onClick={numInput}>5</button>
      <button onClick={numInput}>6</button>
      <button onClick={handlerOperator}>-</button>
      <button onClick={numInput}>1</button>
      <button onClick={numInput}>2</button>
      <button onClick={numInput}>3</button>
      <button onClick={handlerOperator}>+</button>
      <button onClick={numInput}>0</button>
      <button onClick={numInput}>.</button>
      <button onClick={equal}>=</button>
    </div>
  );
}

export default App;
