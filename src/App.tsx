import './App.css';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import ShowClime from './components/ShowClime';

function App() {
  return (
    <div className="App">
      <ShowClime />
      <Forecast />
      <Highlights />
    </div>
  );
}

export default App;
