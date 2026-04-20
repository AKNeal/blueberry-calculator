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
            © 2011–2026.
          </p>
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Methodology</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>BlueberryCalculator.com · Made with 🫐 in Portland, OR</span>
        <span>* "#1 on Google" for "blueberry calculator with 13 calculators" since 2019</span>
      </div>
    </footer>
  );
}
