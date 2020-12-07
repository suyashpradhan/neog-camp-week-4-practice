import React from "react";
import "./styles.css";

function Calc(num1, num2) {
  return num1 * num2;
}

function EvenOdd(index) {
  if (index % 2 === 0) {
    return "red";
  }
}

function font(index) {
  if (index % 2 === 0) {
    return "3rem";
  }
  return "2rem";
}

//Scores Array
let scores = ["car", "bike", "train", "helicopter", "plane"];

function App() {
  return (
    <div className="App">
      <h2>Welcome Suyash Pradhan</h2>
      <h3>Calculation is: {Calc(9, 5)}</h3>
      <hr />
      <ul>
        {scores.map((el, index) => {
          return (
            <li
              style={{ backgroundColor: EvenOdd(index), fontSize: font(index) }}
              key={el}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
