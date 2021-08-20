import logo from './logo.svg';
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Pokedex />
        </p>
      </header>
    </div>
  );
}

export default App;
