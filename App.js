import React from "react";
import "./App.css";

function App() {
  const forLoopNumbers = [];
  for (let i = 1; i <= 5; i += 1) {
    forLoopNumbers.push(i);
  }

  const whileMessages = [];
  let counter = 1;
  while (counter <= 3) {
    whileMessages.push(`Durchlauf ${counter}`);
    counter += 1;
  }

  const mappedTodos = [
    { id: 1, text: "Komponenten strukturieren" },
    { id: 2, text: "Zustand verwalten" },
    { id: 3, text: "Listen mit map() rendern" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-badge">Schleifen</div>
        <div>
          <p className="App-kicker">Kurzer React-Leitfaden</p>
          <h1 className="App-title">Drei Wege, um eine Schleife zu schreiben</h1>
          <p className="App-subtitle">
            For-, while- und map-Schleifen helfen dir, wiederholende Aufgaben in
            React zu erledigen.
          </p>
        </div>
      </header>

      <main className="App-grid">
        <section className="App-card">
          <p className="App-label">For-Schleife</p>
          <h2 className="App-heading">Zahlen 1 bis 5 zählen</h2>
          <p>
            Die klassische for-Schleife eignet sich gut, wenn du den Start- und
            Endpunkt kennst.
          </p>
          <ul className="App-list">
            {forLoopNumbers.map((number) => (
              <li key={number} className="App-listItem">
                <span className="App-pill">{number}</span>
                <span>Zahl aus der For-Schleife</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="App-card">
          <p className="App-label">While-Schleife</p>
          <h2 className="App-heading">Solange eine Bedingung gilt</h2>
          <p>
            Eine while-Schleife wiederholt sich, bis eine Bedingung nicht mehr
            erfüllt ist.
          </p>
          <ol className="App-list">
            {whileMessages.map((message) => (
              <li key={message} className="App-listItem">
                <span className="App-pill">{message}</span>
                <span>Status einer While-Schleife</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="App-card">
          <p className="App-label">map()</p>
          <h2 className="App-heading">Arrays elegant rendern</h2>
          <p>
            Mit <code>map()</code> wandelst du Daten direkt in React-Elemente
            um und erhältst automatisch eindeutige Schlüssel.
          </p>
          <ul className="App-list">
            {mappedTodos.map((todo) => (
              <li key={todo.id} className="App-listItem">
                <span className="App-pill">{todo.id}</span>
                <span>{todo.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
