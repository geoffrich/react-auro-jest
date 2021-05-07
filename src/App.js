import './App.css';
import '@alaskaairux/design-tokens/dist/tokens/CSSCustomProperties.css';
import '@alaskaairux/auro-button';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <auro-button onClick={() => {setCount(count + 1)}}>Hello Auro</auro-button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
