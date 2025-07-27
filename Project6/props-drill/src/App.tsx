  import React, { useState } from 'react';
  import Parent from './components/Parent';
  
  const App = () => {
    const[name, setName] = useState('')
    return (
      <div>
        <h1>Input Form</h1>
        <form>
          <input type='text' placeholder = "Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </form>
        <Parent name = {name}/>
      </div>
    );
  }

  export default App;
