import './App.css'
import CountdownTimer from './Components/CountdownTimer/CountdownTimer'; 

function App() {

  const countdownTimestampMs = Date.now() + 1500000; // Example: 25 min counter

  return (
    <div className ="App">
      <CountdownTimer
      countdownTimestampMs={countdownTimestampMs}/>

    </div>
  );
}

export default App