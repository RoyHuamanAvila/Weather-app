import './App.scss';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import ShowClime from './components/ShowClime';

function App() {
  return (
    <div className="App">
      <ShowClime />
      <div className='App-2'>
        <Forecast />
        <Highlights />
        <footer>Created by <a target='_blank' href="https://github.com/RoyHuamanAvila" rel="noreferrer">royhuamanavila</a> - Github</footer>
      </div>
    </div>
  );
}

export default App;
