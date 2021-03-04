import React, { useState } from 'react';
import WidthPrinter from './WidthPrinter';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(v => v + 1)}>userId change</button>
    </>
  )
}