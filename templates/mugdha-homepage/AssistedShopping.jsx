// Mugdha — Assisted Shopping prompt. DEFERRED: never on load. Slides in after a
// delay or a scroll. Mobile = bottom sheet ~2/3 height, always closable.
function MAssistedShopping() {
  const { Button } = window.MugdhaDesignSystem_3d32ee;
  const [open, setOpen] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    if (sessionStorage.getItem("mugdha-assist-dismissed")) { setDismissed(true); }
    let done = false;
    const reveal = () => { if (!done) { done = true; setOpen(true); } };
    const timer = setTimeout(() => { if (!sessionStorage.getItem("mugdha-assist-dismissed")) reveal(); }, 9000);
    const onScroll = () => { if (!sessionStorage.getItem("mugdha-assist-dismissed") && window.scrollY > window.innerHeight * 1.2) reveal(); };
    // open on demand (Live Shop nav button) — overrides dismissal
    const onOpen = () => { setDismissed(false); setOpen(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mugdha-open-assist", onOpen);
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); window.removeEventListener("mugdha-open-assist", onOpen); };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("mugdha-assist-dismissed", "1");
  };

  if (dismissed) return null;

  return (
    <>
      {/* mobile scrim */}
      <div
        className="m-only"
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(22,9,16,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity var(--motion-base) var(--ease-silk)",
        }}
      />
      <aside
        role="dialog"
        aria-label="Assisted shopping"
        className="massist"
        data-open={open ? "1" : "0"}
      >
        <button onClick={close} aria-label="Close" style={assistClose}><i data-lucide="x"></i></button>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={assistMark}><i data-lucide="sparkles"></i></span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-subtitle)", fontWeight: 600, color: "var(--oyster)", letterSpacing: "var(--tracking-display)" }}>
              Not sure where to start?
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "rgba(239,234,225,0.82)", lineHeight: 1.55, margin: "8px 0 0", maxWidth: "34ch" }}>
              Tell us the occasion and your budget. We'll pull three drapes worth seeing —
              the way our store staff would.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <Button variant="gold" size="sm">Help me choose</Button>
          <Button variant="ghost" onDark size="sm" onClick={close}>Maybe later</Button>
        </div>
      </aside>
    </>
  );
}

const assistClose = {
  position: "absolute", top: 14, right: 14, width: 32, height: 32,
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  border: "none", background: "transparent", color: "var(--smoke-taupe)", cursor: "pointer", borderRadius: "var(--radius-md)",
};
const assistMark = {
  flex: "none", width: 40, height: 40, borderRadius: "var(--radius-md)",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  background: "rgba(199,162,74,0.14)", color: "var(--zari)", border: "1px solid var(--zari-30)",
};

Object.assign(window, { MAssistedShopping });
