export function FactMarquee() {
  const facts = [
    "A single blueberry contains over 250mg of anthocyanins",
    "It would take 63 billion berries laid end-to-end to reach the Moon",
    "The world's largest blueberry weighed 16.2 grams",
    "Wild blueberries are 40% smaller than cultivated ones",
    "North America produces 90% of the world's blueberries",
  ];
  return (
    <div className="facts">
      <div className="facts-inner">
        {[...facts, ...facts].map((f, i) => (
          <span key={i} className="fact">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-col about">
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 900,
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span className="logo-berry" />
            Blueberry<span style={{ color: "var(--berry-bright)", fontStyle: "italic", fontWeight: 400 }}>Calculator</span>
          </div>
          <p>
            The internet's most comprehensive blueberry measurement resource. Calculators
            assume USDA standard median berry dimensions (12.7mm, 1.5g, 1.07cm³).
            © 2026 Neal Media &amp; Production.
          </p>
        </div>
        <div className="footer-col">
          <h4>Guides</h4>
          <ul>
            <li><a href="/articles">All Articles</a></li>
            <li><a href="/articles/how-many-blueberries-in-a-cup">Berries per Cup</a></li>
            <li><a href="/articles/how-to-freeze-blueberries">Freezing Blueberries</a></li>
            <li><a href="/articles/how-to-store-fresh-blueberries">Storing Blueberries</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Recipes</h4>
          <ul>
            <li><a href="/recipes">All Recipes</a></li>
            <li><a href="/recipes/classic-blueberry-pie">Classic Pie</a></li>
            <li><a href="/recipes/blueberry-muffins">Muffins</a></li>
            <li><a href="/recipes/blueberry-jam">Jam</a></li>
            <li><a href="/recipes/blueberry-cobbler">Cobbler</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Measurement</h4>
          <ul>
            <li><a href="/median-berry">Unit Converter</a></li>
            <li><a href="/volume">Volume</a></li>
            <li><a href="/physics">Physics</a></li>
            <li><a href="/cost">Cost Per Berry</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Site</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/methodology">Methodology</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>BlueberryCalculator.com · Published by Neal Media &amp; Production</span>
        <span>
          <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> ·{" "}
          <a href="/contact">Contact</a>
        </span>
      </div>
    </footer>
  );
}
