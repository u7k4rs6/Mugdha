// Mugdha homepage — header. Announcement bar + main nav (real IA) with the
// Assisted Live Shop video feature. Centered logo, refined utilities.

/* ---------- Announcement bar (replaces the old FLAT 10% OFF tab) ---------- */
function MAnnounce() {
  const msgs = [
    "Flat 10% off your first order",
    "Complimentary shipping across India",
    "Book an Assisted Live Shop with our store staff",
  ];
  const [i, setI] = React.useState(0);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % msgs.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: "#160910", borderBottom: "1px solid var(--zari-30)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "9px var(--container-pad)", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <span style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "var(--zari)", flex: "none" }} />
        <span key={i} style={{ fontFamily: "var(--font-body)", fontSize: "12px", letterSpacing: "0.06em", color: "rgba(239,234,225,0.9)", animation: reduce ? "none" : "mtest-fade var(--motion-base) var(--ease-silk)" }}>
          {msgs[i]}
        </span>
        <span style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "var(--zari)", flex: "none" }} />
      </div>
    </div>
  );
}

/* ---------- Main header ---------- */
function MHeader({ bag = 0, onSearch, onMenu, onAssist }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Sarees", href: "../mugdha-collection/index.html" },
    { label: "Occasions", href: "#occasion" },
    { label: "Stores", href: "../mugdha-stores/index.html" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(22,9,16,0.92)" : "rgba(22,9,16,0.55)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid " + (scrolled ? "var(--zari-30)" : "var(--zari-15)"),
        transition: "background var(--motion-base) var(--ease-silk), border-color var(--motion-base) var(--ease-silk)",
      }}
    >
      <MAnnounce />
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: scrolled ? "12px var(--container-pad)" : "18px var(--container-pad)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          transition: "padding var(--motion-base) var(--ease-silk)",
        }}
      >
        <button onClick={onMenu} className="m-only" style={iconBtn} aria-label="Menu">
          <i data-lucide="menu"></i>
        </button>

        <nav className="d-only mnav" style={{ display: "flex", gap: "30px", flex: 1, alignItems: "center" }}>
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="mnav-link">{n.label}</a>
          ))}
        </nav>

        <a
          href="#"
          aria-label="Mugdha — home"
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center" }}
        >
          <img
            src="../../assets/logo/mugdha-lockup-white.png"
            alt="Mugdha"
            style={{ height: scrolled ? "26px" : "30px", width: "auto", display: "block", transition: "height var(--motion-base) var(--ease-silk)" }}
          />
        </a>

        <div style={{ display: "flex", gap: "6px", alignItems: "center", flex: 1, justifyContent: "flex-end" }}>
          <button onClick={onAssist} className="d-only massist-btn" aria-label="Assisted Live Shop">
            <i data-lucide="video"></i>
            <span>Live Shop</span>
          </button>
          <button onClick={onSearch} style={iconBtn} aria-label="Search">
            <i data-lucide="search"></i>
          </button>
          <button style={iconBtn} className="d-only" aria-label="Account">
            <i data-lucide="user"></i>
          </button>
          <button style={{ ...iconBtn, position: "relative" }} aria-label="Bag">
            <i data-lucide="shopping-bag"></i>
            {bag > 0 && <span style={bagBadge}>{bag}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

const iconBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  border: "none",
  background: "transparent",
  color: "var(--oyster)",
  cursor: "pointer",
  borderRadius: "var(--radius-md)",
};

const bagBadge = {
  position: "absolute",
  top: "3px",
  right: "3px",
  minWidth: "16px",
  height: "16px",
  padding: "0 4px",
  borderRadius: "999px",
  background: "var(--zari)",
  color: "var(--mulberry-ink)",
  fontSize: "10px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-body)",
};

Object.assign(window, { MHeader, MAnnounce });
