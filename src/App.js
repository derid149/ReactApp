import React from "react";

const appStyles = `
:root {
  color: #0f172a;
  background-color: #f8fafc;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(circle at 20% 20%, #e0f2fe 0, transparent 25%),
    radial-gradient(circle at 80% 0, #e0f2fe 0, transparent 20%),
    radial-gradient(circle at 50% 70%, #fef3c7 0, transparent 20%), #f8fafc;
  min-height: 100vh;
  color: #0f172a;
}

.App {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 72px;
}

.App-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;
}

.App-badge {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #f8fafc;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.22);
}

.App-kicker {
  color: #1d4ed8;
  font-weight: 700;
  margin: 0 0 6px;
}

.App-title {
  margin: 0 0 8px;
  font-size: 2.4rem;
  letter-spacing: -0.02em;
}

.App-subtitle {
  margin: 0;
  font-size: 1rem;
  color: #475569;
  max-width: 680px;
}

.App-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.App-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 8px;
}

.App-label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: #9333ea;
}

.App-heading {
  margin: 0;
  font-size: 1.5rem;
}

.App-list {
  margin: 8px 0 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.App-listItem {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8fafc, #eef2ff);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
}

.App-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #10b981, #16a34a);
  color: #f8fafc;
  border-radius: 999px;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(16, 185, 129, 0.3);
}

code {
  background: #0f172a;
  color: #e2e8f0;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.95em;
}
`;

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
      <style>{appStyles}</style>
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
