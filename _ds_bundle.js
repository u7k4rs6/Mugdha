/* @ds-bundle: {"format":3,"namespace":"MugdhaDesignSystem_3d32ee","components":[{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"SheenImage","sourcePath":"components/brand/SheenImage.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"OccasionTile","sourcePath":"components/product/OccasionTile.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}]} */

(() => {

const __ds_ns = (window.MugdhaDesignSystem_3d32ee = window.MugdhaDesignSystem_3d32ee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  link,
  align = "left",
  onDark = false,
  style = {}
}) {
  const titleColor = onDark ? "var(--oyster)" : "var(--text-strong)";
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "24px",
      flexWrap: "wrap",
      textAlign: align,
      ...style
    }
  }, React.createElement("div", {
    style: {
      flex: align === "center" ? "1 1 100%" : "1 1 auto"
    }
  }, eyebrow && React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--zari)",
      marginBottom: "12px"
    }
  }, eyebrow), React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title)",
      fontWeight: 600,
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-display)",
      color: titleColor,
      margin: 0
    }
  }, title)), link && React.createElement("a", {
    href: link.href || "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-sm)",
      fontWeight: 600,
      color: onDark ? "var(--zari)" : "var(--kumkum)",
      textDecoration: "none",
      borderBottom: "1px solid currentColor",
      paddingBottom: "2px",
      whiteSpace: "nowrap"
    }
  }, link.label));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/SheenImage.jsx
try { (() => {
function SheenImage({
  src,
  alt = "",
  tone = "mulberry",
  radius = "var(--radius-lg)",
  ratio = "3 / 4",
  sweepOnLoad = false,
  hairline = true,
  weave = true,
  children,
  style = {},
  ...rest
}) {
  const [sweep, setSweep] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  React.useEffect(() => {
    if (sweepOnLoad && !reduce) {
      const t = setTimeout(() => setSweep(true), 250);
      return () => clearTimeout(t);
    }
  }, [sweepOnLoad, reduce]);
  const grounds = {
    mulberry: "radial-gradient(130% 100% at 15% 0%, #4a1a28 0%, transparent 55%), linear-gradient(150deg, var(--mulberry-ink), #160910)",
    peacock: "radial-gradient(130% 100% at 80% 10%, #1d6a70 0%, transparent 55%), linear-gradient(150deg, #0c3a3f, var(--mulberry-ink))",
    kumkum: "radial-gradient(130% 100% at 50% 0%, #c21f7a 0%, transparent 60%), linear-gradient(150deg, var(--magenta), #3a0726)"
  };
  const on = weave && hover && !reduce;
  const draw = (offset, width, dash) => ({
    fill: "none",
    stroke: "var(--zari)",
    strokeWidth: width,
    vectorEffect: "non-scaling-stroke",
    pathLength: 100,
    strokeDasharray: dash,
    strokeDashoffset: on ? 0 : 100,
    transition: "stroke-dashoffset var(--motion-slow) var(--ease-silk) " + offset
  });
  return React.createElement("div", Object.assign({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radius,
      aspectRatio: ratio,
      background: src ? "var(--mulberry-ink)" : grounds[tone] || grounds.mulberry,
      boxShadow: hairline ? "inset 0 0 0 1px var(--zari-30)" : "none",
      ...style
    }
  }, rest), src && React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: on ? "scale(1.045)" : "scale(1)",
      transition: "transform 900ms var(--ease-silk)"
    }
  }), React.createElement("span", {
    "aria-hidden": "true",
    onAnimationEnd: () => setSweep(false),
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "var(--sheen-gradient)",
      transform: "translateX(-120%) skewX(-12deg)",
      animation: sweep ? "mugdha-sheen-sweep var(--motion-sheen) var(--ease-silk) forwards" : "none"
    }
  }), weave && React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: "9px",
      width: "calc(100% - 18px)",
      height: "calc(100% - 18px)",
      pointerEvents: "none",
      overflow: "visible"
    }
  }, React.createElement("rect", {
    x: "0", y: "0", width: "100", height: "100",
    style: draw("0ms", "1.5", "100")
  }), React.createElement("rect", {
    x: "2.2", y: "2.2", width: "95.6", height: "95.6",
    style: { ...draw("120ms", "0.75", "100"), opacity: 0.55 }
  })), children && React.createElement("div", {
    style: { position: "absolute", inset: 0 }
  }, children));
}
Object.assign(__ds_scope, { SheenImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SheenImage.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "solid",
  size = "md",
  onDark = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  href,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", font: "var(--fs-sm)" },
    md: { padding: "12px 24px", font: "var(--fs-base)" },
    lg: { padding: "16px 34px", font: "var(--fs-md)" }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: s.font, lineHeight: 1,
    letterSpacing: "0.01em", padding: s.padding, borderRadius: "var(--radius-md)",
    border: "1px solid transparent", cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "background var(--motion-fast) var(--ease-standard), color var(--motion-fast) var(--ease-standard), border-color var(--motion-fast) var(--ease-standard), transform var(--motion-fast) var(--ease-standard)",
    opacity: disabled ? 0.45 : 1, whiteSpace: "nowrap"
  };
  const variants = {
    solid: { background: "var(--kumkum)", color: "var(--oyster)" },
    jewel: { background: "var(--peacock)", color: "var(--oyster)" },
    outline: { background: "transparent", color: onDark ? "var(--oyster)" : "var(--text-strong)", borderColor: "var(--border-hairline)" },
    ghost: { background: "transparent", color: onDark ? "var(--oyster)" : "var(--kumkum)", padding: s.padding.replace(/\d+px$/, "0").trim() },
    gold: { background: "var(--zari)", color: "var(--mulberry-ink)" }
  };
  const hovers = {
    solid: { background: "var(--kumkum-60)" },
    jewel: { background: "var(--peacock-60)" },
    outline: { borderColor: "var(--zari)", background: onDark ? "rgba(199,162,74,0.08)" : "rgba(199,162,74,0.10)" },
    ghost: { color: "var(--kumkum-60)" },
    gold: { background: "#d4b15f" }
  };
  const presses = {
    solid: { background: "var(--kumkum-120)", transform: "translateY(1px)" },
    jewel: { background: "#0d3a3f", transform: "translateY(1px)" },
    outline: { transform: "translateY(1px)" },
    ghost: { transform: "translateY(1px)" },
    gold: { background: "#b8923f", transform: "translateY(1px)" }
  };
  const v = variants[variant] || variants.solid;
  const styleObj = { ...base, ...v, ...style };
  const handlers = disabled ? {} : {
    onMouseEnter: e => Object.assign(e.currentTarget.style, hovers[variant]),
    onMouseLeave: e => Object.assign(e.currentTarget.style, v, { transform: "none" }),
    onMouseDown: e => Object.assign(e.currentTarget.style, presses[variant]),
    onMouseUp: e => Object.assign(e.currentTarget.style, hovers[variant])
  };
  const content = React.createElement(React.Fragment, null,
    iconLeft && React.createElement("span", { style: { display: "inline-flex" } }, iconLeft),
    children,
    iconRight && React.createElement("span", { style: { display: "inline-flex" } }, iconRight)
  );
  if (href && !disabled) {
    return React.createElement("a", Object.assign({ href, style: styleObj }, handlers, rest), content);
  }
  return React.createElement("button", Object.assign({ type, disabled, style: styleObj }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onDark = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || "in-" + Math.random().toString(36).slice(2, 8);
  const fg = onDark ? "var(--oyster)" : "var(--text-strong)";
  const line = focused ? "var(--zari)" : onDark ? "var(--zari-30)" : "var(--ink-on-oyster-08)";
  return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px", ...style } },
    label && React.createElement("label", {
      htmlFor: inputId,
      style: { fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: onDark ? "var(--smoke-taupe)" : "var(--text-muted)" }
    }, label),
    React.createElement("input", Object.assign({
      id: inputId, type, placeholder, value, onChange,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      style: { fontFamily: "var(--font-body)", fontSize: "var(--fs-md)", color: fg, background: "transparent", border: "none", borderBottom: "1px solid " + line, padding: "10px 2px", outline: "none", transition: "border-color var(--motion-base) var(--ease-silk)" }
    }, rest))
  );
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({ children, tone = "gold", square = false, style = {}, ...rest }) {
  const tones = {
    gold: { color: "var(--zari)", border: "1px solid var(--zari-30)", background: "transparent" },
    ink: { color: "var(--text-strong)", border: "1px solid var(--ink-on-oyster-08)", background: "var(--oyster-70)" },
    jewel: { color: "var(--oyster)", border: "1px solid transparent", background: "var(--peacock)" },
    kumkum: { color: "var(--oyster)", border: "1px solid transparent", background: "var(--kumkum)" },
    soft: { color: "var(--text-muted)", border: "1px solid var(--ink-on-oyster-08)", background: "transparent" }
  };
  const t = tones[tone] || tones.gold;
  return React.createElement("span", Object.assign({
    style: {
      display: "inline-flex", alignItems: "center", gap: "6px",
      fontFamily: "var(--font-body)", fontSize: "var(--fs-xs)", fontWeight: 600,
      letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px",
      borderRadius: square ? "var(--radius-sm)" : "var(--radius-pill)", lineHeight: 1,
      ...t, ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/product/OccasionTile.jsx
try { (() => {
function OccasionTile({ label, caption, image, alt, tone = "mulberry", ratio = "4 / 5", href = "#", style = {} }) {
  return React.createElement("a", { href, style: { display: "block", textDecoration: "none", ...style } },
    React.createElement(__ds_scope.SheenImage, { src: image, alt: alt || (image ? label : ""), tone, ratio },
      React.createElement("div", {
        style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,9,16,0.82) 0%, rgba(22,9,16,0.25) 45%, transparent 75%)" }
      }),
      React.createElement("div", {
        style: { position: "absolute", left: 0, right: 0, bottom: 0, padding: "22px", display: "flex", flexDirection: "column", gap: "8px" }
      },
        React.createElement("span", { style: { width: "34px", height: "1px", background: "var(--zari)" } }),
        React.createElement("span", {
          style: { fontFamily: "var(--font-display)", fontSize: "var(--fs-subtitle)", fontWeight: 600, color: "var(--oyster)", letterSpacing: "var(--tracking-display)" }
        }, label),
        caption && React.createElement("span", {
          style: { fontFamily: "var(--font-body)", fontSize: "var(--fs-sm)", color: "rgba(239,234,225,0.78)" }
        }, caption)
      )
    )
  );
}
Object.assign(__ds_scope, { OccasionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/OccasionTile.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function ProductCard({ name, fabric, price, image, alt, tone = "mulberry", onDark = false, href = "#", style = {} }) {
  const formatted = typeof price === "number" ? "₹" + price.toLocaleString("en-IN") : price;
  const nameColor = onDark ? "var(--oyster)" : "var(--text-strong)";
  const priceColor = onDark ? "var(--zari)" : "var(--text-body)";
  return React.createElement("a", { href, style: { display: "flex", flexDirection: "column", gap: "14px", textDecoration: "none", color: "inherit", ...style } },
    React.createElement(__ds_scope.SheenImage, { src: image, alt: alt || (image ? name : ""), tone, ratio: "3 / 4" },
      fabric && React.createElement("div", { style: { position: "absolute", left: "12px", top: "12px" } },
        React.createElement(__ds_scope.Tag, { tone: "gold" }, fabric)
      )
    ),
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
      React.createElement("span", {
        style: { fontFamily: "var(--font-display)", fontSize: "var(--fs-subtitle)", fontWeight: 500, color: nameColor, letterSpacing: "var(--tracking-display)", lineHeight: 1.2 }
      }, name),
      formatted && React.createElement("span", {
        style: { fontFamily: "var(--font-body)", fontSize: "var(--fs-md)", fontWeight: onDark ? 600 : 400, color: priceColor, fontVariantNumeric: "tabular-nums" }
      }, formatted)
    )
  );
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeader = __ds_scope.SectionHeader;
__ds_ns.SheenImage = __ds_scope.SheenImage;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.Tag = __ds_scope.Tag;
__ds_ns.OccasionTile = __ds_scope.OccasionTile;
__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
