import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
