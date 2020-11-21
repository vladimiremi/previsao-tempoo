
import React from 'react';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <div className="tudo">
        
    
      <Header />

        <section>
          <div className="capitais">
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
          </div>
        </section>
        <Footer>Com amor Mimi 😍</Footer>
       </div>
    </div>
  );
}

export default App;
