export default function Home() {
  const picks = [
    {
      name: "TCS",
      price: "₹4,120",
      score: 88,
      buyProb: "82%",
      risk: "Medium",
      confidence: "High",
      type: "Long-term + Swing",
      entry: "₹4,050 - ₹4,090",
      target: "₹4,450",
      stopLoss: "₹3,920",
      sector: "IT",
      sentiment: "Positive",
      reason: [
        "Strong IT sector momentum",
        "Price above key moving averages",
        "Healthy earnings trend",
        "Good risk-reward setup"
      ]
    },
    {
      name: "Reliance",
      price: "₹2,890",
      score: 85,
      buyProb: "78%",
      risk: "Medium",
      confidence: "Medium",
      type: "Swing",
      entry: "₹2,850 - ₹2,880",
      target: "₹3,050",
      stopLoss: "₹2,760",
      sector: "Energy",
      sentiment: "Positive",
      reason: [
        "Breakout setup forming",
        "Strong trading volume",
        "Sector momentum improving",
        "Good short-term opportunity"
      ]
    },
    {
      name: "HDFC Bank",
      price: "₹1,690",
      score: 84,
      buyProb: "76%",
      risk: "Low",
      confidence: "High",
      type: "Long-term",
      entry: "₹1,650 - ₹1,680",
      target: "₹1,850",
      stopLoss: "₹1,590",
      sector: "Banking",
      sentiment: "Stable",
      reason: [
        "Strong banking fundamentals",
        "Stable long-term business",
        "Lower volatility compared to others",
        "Good accumulation candidate"
      ]
    }
  ];

  return (
    <main style={{
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial",
      color: "white",
      background: "linear-gradient(135deg, #07111f, #102a43, #07111f)"
    }}>
      <section style={{
        padding: "30px",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        marginBottom: "30px"
      }}>
        <h1 style={{ fontSize: "38px", margin: 0 }}>
          📈 AI NSE Smart Opportunity Finder
        </h1>
        <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
          Professional AI dashboard for long-term investing and swing trading
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "25px"
        }}>
          <div style={box}>Market Mood<br/><b>🟢 Bullish</b></div>
          <div style={box}>AI Mode<br/><b>Balanced</b></div>
          <div style={box}>Stocks Scanned<br/><b>1500+</b></div>
          <div style={box}>Best Setup<br/><b>Long-term + Swing</b></div>
        </div>
      </section>

      <h2>🔥 Top AI Opportunities Today</h2>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "22px"
      }}>
        {picks.map((stock) => (
          <div key={stock.name} style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.25)"
          }}>
            <h2>{stock.name}</h2>
            <p style={{ color: "#cbd5e1" }}>{stock.sector} • {stock.type}</p>

            <h3 style={{ fontSize: "30px", color: "#22c55e" }}>
              {stock.price}
            </h3>

            <div style={grid}>
              <p>AI Score<br/><b>{stock.score}/100</b></p>
              <p>Buy Probability<br/><b>{stock.buyProb}</b></p>
              <p>Risk<br/><b>{stock.risk}</b></p>
              <p>Confidence<br/><b>{stock.confidence}</b></p>
            </div>

            <div style={{
              marginTop: "15px",
              padding: "14px",
              borderRadius: "14px",
              background: "rgba(0,0,0,0.25)"
            }}>
              <p>Suggested Entry: <b>{stock.entry}</b></p>
              <p>Target: <b style={{ color: "#22c55e" }}>{stock.target}</b></p>
              <p>Stop Loss: <b style={{ color: "#ef4444" }}>{stock.stopLoss}</b></p>
              <p>News Sentiment: <b>{stock.sentiment}</b></p>
            </div>

            <details style={{
              marginTop: "18px",
              background: "rgba(255,255,255,0.08)",
              padding: "14px",
              borderRadius: "14px",
              cursor: "pointer"
            }}>
              <summary><b>View Opportunity</b></summary>
              <ul>
                {stock.reason.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <p><b>AI Suggestion:</b> Watchlist / staggered entry only after confirmation.</p>
            </details>
          </div>
        ))}
      </section>

      <section style={{
        marginTop: "35px",
        padding: "24px",
        borderRadius: "22px",
        background: "rgba(255,255,255,0.08)"
      }}>
        <h2>🧠 AI Risk Note</h2>
        <p style={{ color: "#cbd5e1" }}>
          This dashboard is for research and analysis only. It does not guarantee profit.
          Always check fundamentals, market conditions, and risk before investing.
        </p>
      </section>
    </main>
  );
}

const box = {
  padding: "18px",
  borderRadius: "16px",
  background: "rgba(0,0,0,0.25)",
  color: "#e2e8f0"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
  color: "#e2e8f0"
};
