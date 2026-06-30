// Mugdha homepage — app shell. Wires sections + runs Lucide icon hydration.
function useLucide(dep) {
  React.useLayoutEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({ attrs: { "stroke-width": 1.5, width: 20, height: 20 } });
    }
  });
}

function MobileMenu({ open, onClose, onAssist }) {
  const items = [
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Sarees", href: "../mugdha-collection/index.html" },
    { label: "Occasions", href: "#occasion" },
    { label: "Store Locator", href: "../mugdha-stores/index.html" },
    { label: "Blog", href: "#" },
  ];
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 80, pointerEvents: open ? "auto" : "none" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(22,9,16,0.6)", opacity: open ? 1 : 0, transition: "opacity var(--motion-base) var(--ease-silk)" }} />
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: "min(82vw, 340px)",
        background: "var(--mulberry-ink)", borderRight: "1px solid var(--zari-30)",
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform var(--motion-slow) var(--ease-silk)",
        padding: "26px 24px", display: "flex", flexDirection: "column", gap: 8,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <img src="../../assets/logo/mugdha-lockup-white.png" alt="Mugdha" style={{ height: "26px", width: "auto", display: "block" }} />
          <button onClick={onClose} aria-label="Close" style={{ width: 40, height: 40, border: "none", background: "transparent", color: "var(--oyster)", cursor: "pointer" }}><i data-lucide="x"></i></button>
        </div>
        {items.map((it) => (
          <a key={it.label} href={it.href} onClick={onClose} style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--oyster)", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid var(--zari-15)" }}>{it.label}</a>
        ))}
        <button onClick={() => { onClose(); onAssist(); }} style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(199,162,74,0.12)", border: "1px solid var(--zari-30)", color: "var(--zari)", padding: "12px 16px", borderRadius: "var(--radius-md)", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          <i data-lucide="video"></i> Book an Assisted Live Shop
        </button>
      </div>
    </div>
  );
}

function hydrateIcons() {
  if (window.lucide && document.querySelector("[data-lucide]")) {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.5, width: 20, height: 20 } });
  }
}

function App() {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  useLucide();

  React.useEffect(() => {
    let raf = 0;
    const obs = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(hydrateIcons);
    });
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  const openAssist = () => window.dispatchEvent(new Event("mugdha-open-assist"));

  return (
    <div>
      <MHeader bag={2} onSearch={() => setSearch((s) => !s)} onMenu={() => setMenu(true)} onAssist={openAssist} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} onAssist={openAssist} />
      <main>
        <MHero />
        <MTrustBar />
        <MOccasion />
        <MShopFabric />
        <MFabric />
        <MTestimonials />
        <MStores />
      </main>
      <MFooter />
      <MAssistedShopping />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
