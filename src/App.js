import React, { useState } from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import ButtonBox from "./components/ButtonBox/ButtonBox";
import Button from "./components/Button/Button";
import Name from "./components/Name/Name";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0, // used to store intermediate results
  });
  
  const clearScreen = () => {
    setCalc({
      ...calc,
      res: 0,
      num: 0,
    })
  }

  const handleNumbers = (btn) => {
    setCalc({
      ...calc,
      num: calc.num !== 0 ? Number("" + calc.num + btn) : btn
    });
  }

  const handleInversion = () => {
    setCalc({
      ...calc,
      sign: "",
      num: calc.num * (-1),
      res: 0,
    })
  }

  const handlePercentage = () => {
    setCalc({
      ...calc, 
      num: 0.01 * calc.num
    })
  }

  const handleOperations = btn => {
    setCalc({
      ...calc, 
      sign: btn,
      num: 0,
      res: calc.num, 
    })
    
    console.log("operation: ", calc.sign);
    // should clear the screen as well 
  }

  const handleEqualsClick = () => {
    let res = 0

    switch(calc.sign) {
      case '+': 
        res = calc.res + calc.num; break;
      case '-':
        res = calc.res - calc.num; break;
      case 'x':
        res = calc.res * calc.num; break;
      default: 
        if (calc.res === 0) 
          res = '[DivisionByZero]'
        else 
          res = calc.res / calc.num;
    }

    setCalc({
      ...calc,
      num: typeof(res) !== 'string' ? res.toFixed(2) : res, 
      res, 
    })

    console.log(calc.res)
  }

  return (
    <Wrapper>
      <Name />
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
                onClick={ () => {
                  btn === 'C'
                    ? clearScreen()
                    : btn === '+-' 
                    ? handleInversion()
                    : btn === '%' 
                    ? handlePercentage()
                    : btn === '/' || btn === 'x' || btn === '-' || btn === '+'
                    ? handleOperations (btn)
                    : btn === '=' 
                    ? handleEqualsClick()
                    : handleNumbers(btn)
                }
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;