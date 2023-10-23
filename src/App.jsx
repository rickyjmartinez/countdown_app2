import './App.css'
import CountdownTimer from './Components/CountdownTimer/CountdownTimer'; 

function App() {

  const countdownTimestampMs = Date.now() + 7200000; // Example: two hours from now

  return (
    <div className ="App">
      <CountdownTimer
      countdownTimestampMs={countdownTimestampMs}/>

    </div>
  );
}

export default App