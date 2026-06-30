// Mugdha homepage — hero. Full-bleed silk ground, single H1, gold sheen on load.
function MHero() {
  const { Button } = window.MugdhaDesignSystem_3d32ee;
  const [sweep, setSweep] = React.useState(false);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  React.useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setSweep(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "min(82vh, 720px)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#120b14",
      }}
    >
      {/* real photography — Founder's Edition */}
      <img
        src="../../assets/imagery/hero-founders.png"
        alt="Two women in Mugdha sarees seated in a softly lit palace hall — one in an ivory drape, one in a silver-grey saree with a dark woven border"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />
      {/* scrim — darkens left for legibility, deepens the mood */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(18,11,20,0.92) 0%, rgba(18,11,20,0.66) 34%, rgba(18,11,20,0.18) 58%, rgba(18,11,20,0.30) 100%)," +
            "linear-gradient(to top, rgba(18,11,20,0.7) 0%, transparent 40%)",
        }}
      />
      {/* shot-silk iridescence */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "var(--shot-silk-gradient)",
          backgroundSize: "260% 260%",
          mixBlendMode: "screen",
          opacity: 0.32,
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(0,0,0,0.85) 72%, #000 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(0,0,0,0.85) 72%, #000 100%)",
          animation: reduce ? "none" : "mugdha-shot-silk 16s var(--ease-in-out) infinite alternate",
        }}
      />
      {/* gold sheen sweep on load */}
      <span
        aria-hidden="true"
        onAnimationEnd={() => setSweep(false)}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "var(--sheen-gradient)",
          transform: "translateX(-120%) skewX(-12deg)",
          animation: sweep ? "mugdha-sheen-sweep 1400ms var(--ease-silk) forwards" : "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          width: "100%",
          padding: "0 var(--container-pad) clamp(3rem, 7vw, 6rem)",
        }}
      >
        <div style={{ maxWidth: "min(92%, 600px)" }}>
          <div className="mhero-eyebrow">
            <span style={{ width: "34px", height: "1px", background: "var(--zari)", display: "inline-block", flex: "none" }} />
            <span>Rare pieces&nbsp;·&nbsp;refined taste</span>
          </div>
          <h1 className="mhero-h1">Timeless South Indian elegance</h1>
          <p className="mhero-sub">
            Handloom sarees finished by hand, in twenty-five stores across South India.
            Come see the drape before you decide.
          </p>
          <div className="mhero-ctas" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "32px" }}>
            <Button variant="solid" size="lg" href="#fabric">Explore the collection</Button>
            <Button variant="outline" size="lg" onDark href="#stores">Find a store</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MHero });
