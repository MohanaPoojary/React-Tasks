import React, { useEffect, useState } from 'react';

// interface Data {
//   id: number;
//   name: string;
//   email: string;
// }

const App = () => {
  const[datas, setData] = useState([])

  useEffect(()=>{
    const fetchApi = async () =>{
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const resData = await res.json()
        setData(resData)
      }catch(error){
        console.error('Error fetching users:', error);
      }
    }
    fetchApi();
  }, [])
  return (
    <div>
      <h1>User List</h1>
        <ul>
          {datas.map((data)=>(
            <li key={data.id}><strong>{data.id}</strong></li>
          ))}
        </ul>
    </div>
  );
}

export default App;
