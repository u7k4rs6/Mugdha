// Mugdha homepage — content sections: Occasion, Fabric carousel, Testimonials, Stores.
const MUG = () => window.MugdhaDesignSystem_3d32ee;

/* ---------- Trust bar (under the hero) ---------- */
function MTrustBar() {
  const items = [
    { icon: "headset", label: "Assisted Live Shop", sub: "Shop over video with store staff" },
    { icon: "truck", label: "Express Delivery", sub: "Dispatched within 48 hours" },
    { icon: "badge-check", label: "Certified Handloom", sub: "Silk-mark assured weaves" },
    { icon: "wallet", label: "Prepaid Offer", sub: "Extra savings on prepaid orders" },
  ];
  return (
    <section style={{ background: "var(--oyster)", borderBottom: "1px solid var(--ink-on-oyster-08)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
        <div className="mtrust">
          {items.map((it) => (
            <div key={it.label} className="mtrust-item">
              <span className="mtrust-icon"><i data-lucide={it.icon}></i></span>
              <div>
                <div className="mtrust-label">{it.label}</div>
                <div className="mtrust-sub">{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Shop by Occasion ---------- */
function MOccasion() {
  const { SectionHeader, OccasionTile } = MUG();
  const tiles = [
    { label: "Bridal", caption: "Kanjivaram & wedding silks", tone: "kumkum",
      image: "../../assets/imagery/occ-bridal.jpg",
      alt: "Two women in bridal sarees — one in a deep red Kanjivaram with gold work, one in an emerald-green silk" },
    { label: "Festive", caption: "Pattu & designer drapes", tone: "peacock",
      image: "../../assets/imagery/occ-festive.jpg",
      alt: "Three women in festive sarees — navy, emerald and maroon, richly embellished" },
    { label: "Daily", caption: "Light silks & blends", tone: "mulberry",
      image: "../../assets/imagery/occ-daily.jpg",
      alt: "Three young women in soft everyday sarees against a warm grey studio backdrop" },
    { label: "Gifting", caption: "Boxed, ready to give", tone: "kumkum",
      image: "../../assets/imagery/saree-redgold.jpg",
      alt: "Folded red silk saree with a broad woven gold temple-border pallu, ready to gift" },
  ];
  return (
    <section id="occasion" style={sectionLight}>
      <div style={container}>
        <SectionHeader eyebrow="Shop by occasion" title="For the day you have in mind" />
        <div className="mocc-grid" style={{ marginTop: "var(--space-7)" }}>
          {tiles.map((t) => (
            <OccasionTile key={t.label} label={t.label} caption={t.caption} tone={t.tone} image={t.image} alt={t.alt} ratio="4 / 5" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Shop by Fabric (6 real category tiles from S3) ---------- */
const FABRIC_CATS = [
  { name: "Chiffon",        image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771307031283__1768832096507__Chiffon%2520%25281%2529.jpg" },
  { name: "Designer Blend", image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771829391494__1771829391308__Designer%2520Blend.jpg" },
  { name: "Georgette",      image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771307030445__1768831934227__georgette.jpg" },
  { name: "Tussar",         image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771307030641__1768831960300__Tussar.jpg" },
  { name: "Kora Silk",      image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771307031443__1768832146285__Kora%2520Silk.jpg" },
  { name: "Crepe",          image: "https://mugdhabk.s3.ap-south-1.amazonaws.com/compress/1771829281068__1771829280886__crepe.jpg" },
];

function MShopFabric() {
  const { SectionHeader } = MUG();
  return (
    <section id="fabric" style={sectionLight}>
      <div style={container}>
        <SectionHeader eyebrow="Shop by fabric" title="Find your weave" />
        <div className="mfabcat-grid" style={{ marginTop: "var(--space-7)" }}>
          {FABRIC_CATS.map((f) => (
            <a key={f.name} href="../mugdha-collection/index.html" className="mfabcat-tile">
              <img src={f.image} alt={"Mugdha " + f.name + " sarees"} loading="lazy" />
              <div className="mfabcat-scrim" aria-hidden="true" />
              <span className="mfabcat-name">{f.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- New Arrivals (real catalogue carousel) ---------- */
function MFabric() {
  const { SectionHeader, ProductCard } = MUG();
  const ref = React.useRef(null);
  const data = (window.MUGDHA_DATA && window.MUGDHA_DATA.products) || [];
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section id="new-arrivals" style={sectionDark}>
      <div style={container}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <SectionHeader eyebrow="New arrivals" title="Fresh off the loom" onDark />
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => scroll(-1)} style={navBtn} aria-label="Previous"><i data-lucide="arrow-left"></i></button>
            <button onClick={() => scroll(1)} style={navBtn} aria-label="Next"><i data-lucide="arrow-right"></i></button>
          </div>
        </div>
        <div ref={ref} className="mfab-rail" style={{ marginTop: "var(--space-7)" }}>
          {data.map((p, n) => (
            <div key={n} className="mfab-item">
              <ProductCard name={p.name} fabric={p.fabric} price={p.price} image={p.image} alt={"Mugdha " + p.name} href="../mugdha-collection/index.html" onDark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (editorial, dark jewel) ---------- */
function MTestimonials() {
  const items = [
    { quote: "I went in for one festive saree and the staff pulled out three drapes I would never have picked myself. I bought all three.", name: "Meera S.", meta: "Festive · Bengaluru store", stars: 5 },
    { quote: "I wore this beautiful Kanchipuram saree on my daughter's first birthday. It's lightweight, and not as heavy as other silk sarees.", name: "Swathi", meta: "Kanchipuram silk · Hyderabad", stars: 5 },
    { quote: "A Tussar that actually feels like the photographs. It moves slowly, the way a good drape should.", name: "Lakshmi V.", meta: "Tussar · Online order", stars: 5 },
    { quote: "They held a saree for a week so I could bring my grandmother to see it in person. That is why I keep coming back.", name: "Divya K.", meta: "Bridal · Chennai store", stars: 5 },
  ];
  const [i, setI] = React.useState(0);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, []);
  const go = (n) => setI((n + items.length) % items.length);
  const t = items[i];
  const stars = (n) => Array.from({ length: 5 }, (_, k) => (
    <i key={k} data-lucide="star" style={{ width: 16, height: 16, color: "var(--zari)", fill: k < n ? "var(--zari)" : "transparent" }}></i>
  ));

  return (
    <section style={{ ...sectionDark, background: "linear-gradient(155deg, #0c3a3f 0%, var(--mulberry-ink) 62%, #160910 100%)" }}>
      <div style={container}>
        <div className="mtest">
          {/* left — the quote */}
          <div className="mtest-main">
            <span className="mtest-mark" aria-hidden="true">&#8220;</span>
            <div className="mocc-eyebrow" style={{ color: "var(--zari)" }}>
              <span style={{ width: 34, height: 1, background: "var(--zari)", display: "inline-block" }} />
              From our customers
            </div>
            <blockquote key={i} className="mtest-quote">{t.quote}</blockquote>
            <div key={"a" + i} className="mtest-author">
              <div className="mtest-stars">{stars(t.stars)}</div>
              <div className="mtest-name">{t.name}</div>
              <div className="mtest-meta">{t.meta}</div>
            </div>
            <div className="mtest-nav">
              <button onClick={() => go(i - 1)} aria-label="Previous"><i data-lucide="arrow-left"></i></button>
              <span className="mtest-index">{String(i + 1).padStart(2, "0")} <span>/ {String(items.length).padStart(2, "0")}</span></span>
              <button onClick={() => go(i + 1)} aria-label="Next"><i data-lucide="arrow-right"></i></button>
            </div>
          </div>

          {/* right — aggregate rating panel */}
          <aside className="mtest-panel">
            <div className="mtest-rating">4.9</div>
            <div className="mtest-rating-stars">{stars(5)}</div>
            <div className="mtest-rating-sub">Average rating across 12,000+ sarees sold</div>
            <div className="mtest-stats">
              <div><strong>25+</strong><span>Stores to visit</span></div>
              <div><strong>1.2 L</strong><span>Sarees delivered</span></div>
            </div>
            <div className="mtest-verified"><i data-lucide="badge-check"></i> Verified buyers, real orders</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Stores ---------- */
function MStores() {
  const { SectionHeader, Button, SheenImage, Tag } = MUG();
  const states = (window.MUGDHA_DATA && window.MUGDHA_DATA.states) || {};
  const stateNames = Object.keys(states);
  return (
    <section id="stores" style={sectionLight}>
      <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-7)" }}>
        <div className="mstores-grid">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <SectionHeader eyebrow="Our stores" title="Twenty-five doors, four states" />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-md)", lineHeight: "var(--leading-normal)", color: "var(--text-body)", maxWidth: "44ch", marginTop: "var(--space-4)" }}>
              A saree is bought with the hands as much as the eyes. Our boutique and bridal stores
              across Telangana, Karnataka, Andhra Pradesh and Tamil Nadu let you feel the weight of a
              drape and see how it catches the light before you decide.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: "var(--space-5) 0 var(--space-6)" }}>
              {stateNames.map((st) => (
                <div key={st}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--magenta)", marginBottom: 8 }}>{st}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {states[st].map((c, i) => <Tag key={i} tone="ink">{c}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button variant="solid" href="../mugdha-stores/index.html" iconLeft={<i data-lucide="map-pin"></i>}>Find your nearest store</Button>
            </div>
          </div>
          <SheenImage src="../../assets/imagery/store-kphb.jpg" alt="The Mugdha storefront at KPHB, Hyderabad, established 2018" tone="mulberry" ratio="4 / 5" />
        </div>
      </div>
    </section>
  );
}

const container = { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" };
const sectionLight = { background: "var(--oyster)", padding: "var(--space-9) 0" };
const sectionDark = { background: "var(--mulberry-ink)", padding: "var(--space-9) 0" };
const navBtn = {
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  width: 44, height: 44, borderRadius: "var(--radius-md)",
  border: "1px solid var(--zari-30)", background: "transparent", color: "var(--oyster)", cursor: "pointer",
};

Object.assign(window, { MTrustBar, MOccasion, MShopFabric, MFabric, MTestimonials, MStores });
