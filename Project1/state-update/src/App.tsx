import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tasks, setTasks] = useState<{ name: string; email: string }[]>([]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newTask = {name, email};
    setTasks([...tasks, newTask]);

    setName('')
    setEmail('')
  }

  return (
    <div>
      <h1>React-Tasks</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
        
      </form>
      <div>
        <ul>
          {tasks.map((task, index)=>(
          <li key={index}>
            Name:{task.name}, Email: {task.email}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
