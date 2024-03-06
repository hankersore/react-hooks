import './App.css';
import RandomQuote from './components/useEffect';
import WaterTracker from './components/useState';
import Search from './components/Search';
import { MoodProvider, UserProvider } from './components/useContext';
import MoodAndUser from './components/MoodAndUser';

function App() {

  return (
    <>
      <h1>React Hooks</h1>
      <div className='div'>
      <WaterTracker/>
      <RandomQuote/>
      <Search/>
      <MoodProvider>
      <UserProvider>
        <MoodAndUser />
      </UserProvider>
    </MoodProvider>
      </div>
    </>
  )
}

export default App;
