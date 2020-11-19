import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Previsão do Tempo</h1>
          <input type="text" name="" id="" placeholder="Insira o nome da cidade aqui"/>
      </header>

      <main>
        <h2>Capitais</h2>
        <div className="cidades">
          <div className="dados">
            <p>Min Max</p>
            <ul>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
            </ul>
          </div>
          <div className="dados">
          <p>Min Max</p>
            <ul>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
              <li>18º 27º Rio de Janeiro</li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
