import React from "react";
import "./App.css";
import reposData from "./reposData";

function App() {
  const totalStars = reposData.reduce((sum, repo) => sum + repo.stars, 0);
  const totalForks = reposData.reduce((sum, repo) => sum + repo.forks, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-badge">Repositories</div>
        <div>
          <p className="App-kicker">Projektübersicht</p>
          <h1 className="App-title">Meine Repos im Überblick</h1>
          <p className="App-subtitle">
            {reposData.length} Repositories · {totalStars} Sterne ·{" "}
            {totalForks} Forks
          </p>
        </div>
      </header>

      <main className="App-grid">
        {reposData.map((repo) => (
          <section className="App-card" key={repo.id}>
            <div className="App-cardHeader">
              <a
                className="App-repoName"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
              <span
                className={
                  "App-visibility" +
                  (repo.visibility === "private" ? " App-visibility--private" : "")
                }
              >
                {repo.visibility}
              </span>
            </div>

            <p className="App-description">{repo.description}</p>

            <div className="App-lang">
              <span
                className="App-langDot"
                style={{ backgroundColor: repo.languageColor }}
              />
              <span>{repo.language}</span>
            </div>

            <div className="App-stats">
              <span className="App-stat">★ {repo.stars}</span>
              <span className="App-stat">⑂ {repo.forks}</span>
              <span className="App-stat">⊙ {repo.openIssues} Issues</span>
            </div>

            <div className="App-meta">
              {repo.license && (
                <span className="App-metaItem">⚖ {repo.license}</span>
              )}
              <span className="App-metaItem">Erstellt: {repo.createdAt}</span>
              <span className="App-metaItem">Update: {repo.lastUpdate}</span>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
