export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="/">Open Call</a>
        <span>Interactive Media Arts</span>
      </header>
      <section className="home-grid">
        <div>
          <h1>Open Call</h1>
          <p>New York University<br />Tisch School of the Arts<br />Interactive Media Arts</p>
        </div>
        <nav className="term-list" aria-label="Course terms">
          <a href="/fall-2026">Fall 2026 <span>→</span></a>
        </nav>
      </section>
    </main>
  );
}
