import React, { useState } from 'react';

const App = () => {
  const[firstNumber, setFirstNumber] = useState('')
  const[secondNumber, setSecondNumber] = useState('')
  const[sum, setSum] = useState(0)

  const handleSubmit = () => {
    const total = Number(firstNumber) + Number(secondNumber)
    setSum(total)
  }
  return (
    <div>
      <label>
        Enter the first number: <input type='text' value={firstNumber} onChange={(e)=> setFirstNumber(e.target.value)}/>
      </label>
      <br/>
      <label>
        Enter the second number: <input type='text' value={secondNumber} onChange={(e)=> setSecondNumber(e.target.value)}/>
      </label>
      <br/>
      <button type='submit' onClick={handleSubmit}>
        submit
      </button>
      <br/>
      <label>
        Sum of two number is: {sum}
      </label>
    </div>
  );
}

export default App;
