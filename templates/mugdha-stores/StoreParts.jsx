// Mugdha Store Locator — header, hero, state filter, store card.

function StoreHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    { label: "New Arrivals", href: "../mugdha-homepage/index.html#fabric" },
    { label: "Sarees", href: "../mugdha-homepage/index.html#fabric" },
    { label: "Occasions", href: "../mugdha-homepage/index.html#occasion" },
    { label: "Stores", href: "#" },
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

/* Hero with the real KPHB storefront */
function StoreHero({ total, states }) {
  return (
    <section className="shero">
      <img className="shero-img" src="../../assets/imagery/store-kphb.jpg" alt="The Mugdha storefront at KPHB, Hyderabad, lit at dusk" />
      <div className="shero-scrim" aria-hidden="true"></div>
      <div className="shero-inner">
        <div className="chero-crumb">Home <span>/</span> Store Locator</div>
        <div className="chero-eyebrow"><span className="chero-rule"></span> Visit us in person</div>
        <h1 className="shero-title">{total} doors across {states} states</h1>
        <p className="shero-sub">
          A saree is bought with the hands as much as the eyes. Find your nearest Mugdha store —
          feel the weight of a drape and see how it catches the light before you decide.
        </p>
      </div>
    </section>
  );
}

/* State filter tabs */
function StoreStates({ states, active, onPick, counts }) {
  return (
    <div className="sstates">
      <button className={"sstate" + (active === "All" ? " on" : "")} onClick={() => onPick("All")}>
        All states <span>{counts.All}</span>
      </button>
      {states.map((s) => (
        <button key={s} className={"sstate" + (active === s ? " on" : "")} onClick={() => onPick(s)}>
          {s} <span>{counts[s]}</span>
        </button>
      ))}
    </div>
  );
}

/* A single store card */
function StoreCard({ s, phone, hours }) {
  return (
    <div className={"scard" + (s.flagship ? " flagship" : "")}>
      <div className="scard-top">
        <span className="scard-pin"><i data-lucide="map-pin"></i></span>
        <div className="scard-head">
          <div className="scard-area">{s.area}</div>
          <div className="scard-city">{s.city}, {s.state}</div>
        </div>
        {s.flagship && <span className="scard-badge">Flagship</span>}
      </div>
      <div className="scard-meta">
        <div className="scard-row"><i data-lucide="clock"></i> {hours}</div>
        <a className="scard-row scard-phone" href={"tel:" + phone.replace(/\s/g, "")}><i data-lucide="phone"></i> {phone}</a>
      </div>
      <div className="scard-actions">
        <a className="scard-dir" href={s.maps} target="_blank" rel="noopener">
          <i data-lucide="navigation"></i> Get directions
        </a>
        <a className="scard-call m-inline" href={"tel:" + phone.replace(/\s/g, "")} aria-label="Call store">
          <i data-lucide="phone"></i>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { StoreHeader, StoreHero, StoreStates, StoreCard });
