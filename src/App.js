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
  };
  useEffect(() => {
    setResult(current);
  }, [current]);
  useEffect(() => {
    setResult("0");
  }, []);

  const handlerOperator = (e) => {
    setOperator(e.target.innerText);

    if (current === "") return;
    if (previous !== "") {
      calcResult(operator, current, previous);
    } else {
      setPrevious(current);
      setCurrent("");
    }

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
      case "x":
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
    setResult("");
  };

  const equal = (e) => {
    if (e?.target.innerText === "=") {
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
      <div className="display-box">
        <h1>{result !== "" || result === "0" ? result : previous}</h1>
      </div>
      <div className="btns-box">
        <button className="btn btn-top" onClick={handlerClear}>
          AC
        </button>
        <button className="btn btn-top" onClick={plusMinus}>
          +/-
        </button>
        <button className="btn btn-top" onClick={percent}>
          %
        </button>
        <button className="btn btn-operator" onClick={handlerOperator}>
          /
        </button>
        <button className="btn" onClick={numInput}>
          7
        </button>
        <button className="btn" onClick={numInput}>
          8
        </button>
        <button className="btn" onClick={numInput}>
          9
        </button>
        <button className="btn btn-operator" onClick={handlerOperator}>
          x
        </button>
        <button className="btn" onClick={numInput}>
          4
        </button>
        <button className="btn" onClick={numInput}>
          5
        </button>
        <button className="btn" onClick={numInput}>
          6
        </button>
        <button className="btn btn-operator" onClick={handlerOperator}>
          -
        </button>
        <button className="btn" onClick={numInput}>
          1
        </button>
        <button className="btn" onClick={numInput}>
          2
        </button>
        <button className="btn" onClick={numInput}>
          3
        </button>
        <button className="btn btn-operator" onClick={handlerOperator}>
          +
        </button>
        <button className="btn grid-2" onClick={numInput}>
          0
        </button>
        <button className="btn" onClick={numInput}>
          .
        </button>
        <button className="btn btn-operator" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
