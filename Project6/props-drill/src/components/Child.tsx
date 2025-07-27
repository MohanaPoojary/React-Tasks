import React from 'react';
import GrandChild from './GrandChild';

interface childProps {
    name: string
}
const Child = ({name}: childProps) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild name = {name}/>
    </div>
  );
}

export default Child;
