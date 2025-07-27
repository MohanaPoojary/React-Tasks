import React from 'react';

interface GrandChildProps {
  name: string;
}

const GrandChild = ({name}:GrandChildProps) => {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Hello {name}</p>
    </div>
  );
}

export default GrandChild;
