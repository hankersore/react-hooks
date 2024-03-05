import './App.css';
import RandomQuote from './components/useEffect';
import WaterTracker from './components/useState';
import Search from './components/Search';

function App() {

  return (
    <>
      <h1>React Hooks</h1>
      <div className='div'>
      <WaterTracker/>
      <RandomQuote/>
      <Search/>
      </div>
    </>
  )
}

export default App;
