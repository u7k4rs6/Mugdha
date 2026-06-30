// Mugdha Store Locator — app shell with state filter + search.
function StoreApp() {
  const D = window.MUGDHA_STORES || { stores: [], states: [], phone: "", hours: "" };
  const [active, setActive] = React.useState("All");
  const [q, setQ] = React.useState("");

  const counts = React.useMemo(() => {
    const c = { All: D.stores.length };
    D.states.forEach((s) => { c[s] = D.stores.filter((x) => x.state === s).length; });
    return c;
  }, []);

  const shown = React.useMemo(() => {
    const term = q.trim().toLowerCase();
    return D.stores.filter((s) =>
      (active === "All" || s.state === active) &&
      (term === "" || (s.area + " " + s.city + " " + s.state).toLowerCase().includes(term))
    );
  }, [active, q]);

  // group shown by state, preserving state order
  const groups = D.states
    .map((st) => ({ state: st, items: shown.filter((s) => s.state === st) }))
    .filter((g) => g.items.length > 0);

  return (
    <div>
      <StoreHeader />
      <StoreHero total={D.stores.length} states={D.states.length} />

      <div className="swrap">
        <div className="stoolbar">
          <StoreStates states={D.states} active={active} onPick={setActive} counts={counts} />
          <div className="ssearch">
            <i data-lucide="search"></i>
            <input
              type="text"
              placeholder="Search by city or area"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            {q && <button onClick={() => setQ("")} aria-label="Clear search"><i data-lucide="x"></i></button>}
          </div>
        </div>

        {groups.length === 0 ? (
          <div className="sempty">
            <p>No stores match "{q}".</p>
            <button className="cclear-link" onClick={() => { setQ(""); setActive("All"); }}>Clear search</button>
          </div>
        ) : (
          groups.map((g) => (
            <section key={g.state} className="sgroup">
              <div className="sgroup-head">
                <h2>{g.state}</h2>
                <span>{g.items.length} {g.items.length === 1 ? "store" : "stores"}</span>
              </div>
              <div className="sgrid">
                {g.items.map((s, i) => <StoreCard key={i} s={s} phone={D.phone} hours={D.hours} />)}
              </div>
            </section>
          ))
        )}

        {/* assisted live shop band */}
        <section className="sassist">
          <div className="sassist-mark"><i data-lucide="video"></i></div>
          <div className="sassist-body">
            <h3>Can't make it to a store?</h3>
            <p>Book an Assisted Live Shop — our store staff will walk the aisles and drape sarees for you, live over video.</p>
          </div>
          <a className="sassist-cta" href="../mugdha-homepage/index.html">Book a live session</a>
        </section>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<StoreApp />);
