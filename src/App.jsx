import './App.css';
import RandomQuote from './components/useEffect';
import WaterTracker from './components/useState';

function App() {

  return (
    <>
      <h1>React Hooks</h1>
      <div className='div'>
      <WaterTracker/>
      <RandomQuote/>
      </div>
    </>
  )
}

export default App;
