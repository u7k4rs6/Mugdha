// Mugdha homepage — footer (Mulberry ground, zari hairline, current year).
function MFooter() {
  const { Input, Button } = window.MugdhaDesignSystem_3d32ee;
  const cols = [
    { h: "Shop", links: ["Pattu Sarees", "Kanjivaram Silk", "Designer Sarees", "Bridal & Wedding", "New Arrivals"] },
    { h: "Get Help", links: ["Your Account", "Track Orders", "Shipping Policy", "Return Policy", "Contact Us"] },
    { h: "The house", links: ["Our Story", "Store Locator", "Assisted Live Shop", "Terms & Conditions", "Privacy Policy"] },
  ];
  return (
    <footer style={{ background: "var(--mulberry-ink)", borderTop: "1px solid var(--zari-30)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-8) var(--container-pad) var(--space-6)" }}>
        <div className="mfoot-grid">
          <div>
            <img
              src="../../assets/logo/mugdha-lockup-white.png"
              alt="Mugdha"
              style={{ height: "38px", width: "auto", display: "block" }}
            />
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--fs-subtitle)", color: "var(--zari)", margin: "0 0 12px", letterSpacing: "var(--tracking-display)" }}>
              Rare pieces, refined taste.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "var(--smoke-taupe)", lineHeight: 1.6, maxWidth: "32ch", marginTop: 0 }}>
              A boutique &amp; bridal saree house, finished by hand. Twenty-five stores across
              Hyderabad, Bengaluru, Chennai and Andhra Pradesh.
            </p>
            <div style={{ marginTop: 18, fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "rgba(239,234,225,0.78)", lineHeight: 1.7 }}>
              <div>Mugdha Ecommerce LLP</div>
              <div>17th Cross Rd, HSR Layout, Bengaluru 560102</div>
              <div style={{ marginTop: 6, color: "var(--zari)" }}>+91 79937 10111</div>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={footH}>{c.h}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map((l) => (
                  <li key={l}><a href="#" style={footLink}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: "var(--zari-30)", margin: "var(--space-6) 0 var(--space-4)" }} />
        <div className="mfoot-base">
          <span style={{ color: "var(--smoke-taupe)", fontSize: "var(--fs-sm)" }}>© {new Date().getFullYear()} Mugdha Ecommerce LLP. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#" style={footLink}>Privacy Policy</a>
            <a href="#" style={footLink}>Terms</a>
            <a href="#" style={footLink}>Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footH = { fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--zari)", marginBottom: 16 };
const footLink = { fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "rgba(239,234,225,0.8)", textDecoration: "none" };

Object.assign(window, { MFooter });
