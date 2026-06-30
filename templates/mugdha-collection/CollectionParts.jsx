// Mugdha Collection — filter rail (color swatches lead), product card, header, hero.

/* ---------- Filter rail ---------- */
function CollectionFilters({ DATA, colors, fabrics, maxPrice, onColor, onFabric, onPrice, onClear, activeCount }) {
  return (
    <div className="cfilters">
      <div className="cfilter-group">
        <div className="cfilter-head">
          <span className="cfilter-title">Shop by colour</span>
          {colors.length > 0 && <span className="cfilter-n">{colors.length}</span>}
        </div>
        <div className="cswatches">
          {DATA.colorFacets.map((c) => {
            const on = colors.includes(c.name);
            return (
              <button
                key={c.name}
                className={"cswatch" + (on ? " on" : "")}
                onClick={() => onColor(c.name)}
                aria-pressed={on}
                title={c.name + " (" + c.count + ")"}
              >
                <span className="cswatch-dot" style={{ background: c.swatch }}>
                  {on && <i data-lucide="check"></i>}
                </span>
                <span className="cswatch-label">{c.name}</span>
                <span className="cswatch-count">{c.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="cfilter-group">
        <div className="cfilter-head"><span className="cfilter-title">Fabric</span></div>
        <div className="cchecks">
          {DATA.fabricFacets.map((f) => {
            const on = fabrics.includes(f.name);
            return (
              <button key={f.name} className={"ccheck" + (on ? " on" : "")} onClick={() => onFabric(f.name)} aria-pressed={on}>
                <span className="ccheck-box">{on && <i data-lucide="check"></i>}</span>
                <span className="ccheck-label">{f.name}</span>
                <span className="ccheck-count">{f.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="cfilter-group">
        <div className="cfilter-head"><span className="cfilter-title">Price</span></div>
        <div className="cprice">
          <input type="range" min="3000" max="40000" step="1000" value={maxPrice} onChange={(e) => onPrice(Number(e.target.value))} />
          <div className="cprice-row">
            <span>₹3,000</span>
            <span className="cprice-max">Up to ₹{maxPrice.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      <button className="cclear-all" onClick={onClear} disabled={activeCount === 0}>
        <i data-lucide="rotate-ccw"></i> Clear all filters{activeCount > 0 ? " (" + activeCount + ")" : ""}
      </button>
    </div>
  );
}

/* ---------- Product card ---------- */
function CollectionCard({ p }) {
  const fmt = (n) => "₹" + n.toLocaleString("en-IN");
  return (
    <a className="ccard" href="#">
      <div className="ccard-img">
        <img src={p.image} alt={"Mugdha " + p.name} loading="lazy" />
        {p.offer > 0 && <span className="ccard-offer">{p.offer}% off</span>}
        {/* zari border weave on hover (CSS-driven, normalized perimeter) */}
        <svg className="ccard-weave" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect className="ccard-weave-1" x="0" y="0" width="100" height="100" pathLength="100"></rect>
          <rect className="ccard-weave-2" x="2.2" y="2.2" width="95.6" height="95.6" pathLength="100"></rect>
        </svg>
      </div>
      <div className="ccard-body">
        <span className="ccard-fabric">{p.fabric}</span>
        <span className="ccard-name">{p.name}</span>
        <span className="ccard-price">
          {fmt(p.price)}
          {p.offer > 0 && p.mrp > p.price && <span className="ccard-mrp">{fmt(p.mrp)}</span>}
        </span>
      </div>
    </a>
  );
}

/* ---------- Header ---------- */
function CollectionHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    { label: "New Arrivals", href: "../mugdha-homepage/index.html#new-arrivals" },
    { label: "Sarees", href: "#" },
    { label: "Occasions", href: "../mugdha-homepage/index.html#occasion" },
    { label: "Stores", href: "../mugdha-stores/index.html" },
  ];
  return (
    <header className={"chead" + (scrolled ? " scrolled" : "")}>
      <div className="chead-inner">
        <nav className="d-flex chead-nav">
          {nav.map((n) => <a key={n.label} href={n.href} className="mnav-link">{n.label}</a>)}
        </nav>
        <a href="../mugdha-homepage/index.html" className="chead-logo" aria-label="Mugdha — home">
          <img src="../../assets/logo/mugdha-lockup-white.png" alt="Mugdha" />
        </a>
        <div className="chead-utils">
          <button aria-label="Search"><i data-lucide="search"></i></button>
          <button aria-label="Account" className="d-inline"><i data-lucide="user"></i></button>
          <button aria-label="Bag"><i data-lucide="shopping-bag"></i></button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Collection hero (breadcrumb + title) ---------- */
function CollectionHero({ total }) {
  return (
    <section className="chero">
      <div className="chero-inner">
        <div className="chero-crumb">Home <span>/</span> Mugdha Collection</div>
        <div className="chero-eyebrow"><span className="chero-rule"></span> Rare pieces · refined taste</div>
        <h1 className="chero-title">The Mugdha Collection</h1>
        <p className="chero-sub">
          {total} handloom sarees, woven across South India and finished by hand.
          Filter by colour to find the one for your occasion.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { CollectionFilters, CollectionCard, CollectionHeader, CollectionHero });
