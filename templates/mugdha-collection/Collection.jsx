// Mugdha Collection — filterable PLP. Color is the headline filter.
function CollectionApp() {
  const { Button } = window.MugdhaDesignSystem_3d32ee;
  const DATA = window.MUGDHA_COLLECTION || { products: [], colorFacets: [], fabricFacets: [] };

  const [colors, setColors] = React.useState([]);
  const [fabrics, setFabrics] = React.useState([]);
  const [maxPrice, setMaxPrice] = React.useState(40000);
  const [sort, setSort] = React.useState("featured");
  const [drawer, setDrawer] = React.useState(false);

  const toggle = (arr, set, v) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const filtered = React.useMemo(() => {
    let r = DATA.products.filter((p) =>
      (colors.length === 0 || colors.includes(p.color)) &&
      (fabrics.length === 0 || fabrics.includes(p.fabric)) &&
      p.price <= maxPrice
    );
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    else if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    else if (sort === "discount") r = [...r].sort((a, b) => b.offer - a.offer);
    return r;
  }, [colors, fabrics, maxPrice, sort]);

  const clearAll = () => { setColors([]); setFabrics([]); setMaxPrice(40000); };
  const activeCount = colors.length + fabrics.length + (maxPrice < 40000 ? 1 : 0);

  const filterRail = (
    <CollectionFilters
      DATA={DATA}
      colors={colors} fabrics={fabrics} maxPrice={maxPrice}
      onColor={(c) => toggle(colors, setColors, c)}
      onFabric={(f) => toggle(fabrics, setFabrics, f)}
      onPrice={setMaxPrice}
      onClear={clearAll}
      activeCount={activeCount}
    />
  );

  return (
    <div>
      <CollectionHeader />
      <CollectionHero total={DATA.total} />

      <div className="cwrap">
        {/* desktop filter rail */}
        <aside className="crail d-block">{filterRail}</aside>

        <div className="cmain">
          <div className="ctoolbar">
            <div className="ctoolbar-left">
              <button className="cfilter-btn m-inline" onClick={() => setDrawer(true)}>
                <i data-lucide="sliders-horizontal"></i> Filters{activeCount ? " (" + activeCount + ")" : ""}
              </button>
              <span className="ccount"><strong>{filtered.length}</strong> sarees</span>
            </div>
            <div className="csort">
              <label htmlFor="csort">Sort</label>
              <div className="cselect">
                <select id="csort" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                  <option value="discount">Biggest discount</option>
                </select>
                <i data-lucide="chevron-down"></i>
              </div>
            </div>
          </div>

          {/* active filter chips */}
          {activeCount > 0 && (
            <div className="cchips">
              {colors.map((c) => (
                <button key={c} className="cchip" onClick={() => toggle(colors, setColors, c)}>{c} <i data-lucide="x"></i></button>
              ))}
              {fabrics.map((f) => (
                <button key={f} className="cchip" onClick={() => toggle(fabrics, setFabrics, f)}>{f} <i data-lucide="x"></i></button>
              ))}
              {maxPrice < 40000 && (
                <button className="cchip" onClick={() => setMaxPrice(40000)}>Under ₹{maxPrice.toLocaleString("en-IN")} <i data-lucide="x"></i></button>
              )}
              <button className="cclear-link" onClick={clearAll}>Clear all</button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="cempty">
              <p>No sarees match these filters.</p>
              <Button variant="outline" onClick={clearAll}>Clear filters</Button>
            </div>
          ) : (
            <div className="cgrid">
              {filtered.map((p, i) => <CollectionCard key={i} p={p} />)}
            </div>
          )}
        </div>
      </div>

      {/* mobile filter drawer */}
      <div className={"cdrawer-scrim" + (drawer ? " open" : "")} onClick={() => setDrawer(false)}></div>
      <div className={"cdrawer" + (drawer ? " open" : "")}>
        <div className="cdrawer-head">
          <span>Filters</span>
          <button onClick={() => setDrawer(false)} aria-label="Close"><i data-lucide="x"></i></button>
        </div>
        <div className="cdrawer-body">{filterRail}</div>
        <div className="cdrawer-foot">
          <Button variant="solid" style={{ width: "100%" }} onClick={() => setDrawer(false)}>
            Show {filtered.length} sarees
          </Button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CollectionApp />);
