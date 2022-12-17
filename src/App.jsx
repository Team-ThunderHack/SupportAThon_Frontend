import { useState } from 'react';
import Interview from './components/Interview/Interview';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Interview />
    </div>
  );
}

export default App;
