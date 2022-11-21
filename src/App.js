
import './App.css';
import DigitalClock from './Components/DigitalClock';
import Stopwatch from './Components/Stopwatch';
import Countdown from './Components/Countdown'
function App() {
  return (
    <div className="App">
      <div className='App-clock'><p>🕒</p><DigitalClock></DigitalClock></div>
      <div className='App-countdown'><p>📆</p><Countdown></Countdown></div>
      <div className='App-crono'><p>⏱️</p><Stopwatch></Stopwatch></div>
    </div>
  );
}

export default App;
