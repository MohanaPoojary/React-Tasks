import React from 'react';
import Child from './Child';

interface parentProps {
    name: string
}
const Parent = ({name}: parentProps) => {
  return (
    <div>
      <h3>Parent Component</h3>
      <Child name = {name}/>
    </div>
    
  );
}

export default Parent;
