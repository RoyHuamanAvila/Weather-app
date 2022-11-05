import './App.css';
import Forecast from './components/Forecast';
import ShowClime from './components/ShowClime';

function App() {
  return (
    <div className="App">
      <ShowClime />
      <Forecast />
    </div>
  );
}

export default App;
