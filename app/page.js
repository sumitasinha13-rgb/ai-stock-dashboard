export default function Home() {
  const picks = [
    {
      name: "TCS",
      score: 88,
      risk: "Medium",
      confidence: "High",
      type: "Long-term + Swing"
    },
    {
      name: "Reliance",
      score: 85,
      risk: "Medium",
      confidence: "Medium",
      type: "Swing"
    },
    {
      name: "HDFC Bank",
      score: 84,
      risk: "Low",
      confidence: "High",
      type: "Long-term"
    }
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#f4f7fb",
        minHeight: "100vh"
      }}
    >
      <h1>📈 AI NSE Smart Opportunity Finder</h1>
      <p>AI-powered stock opportunities dashboard</p>

      {picks.map((stock, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>{stock.name}</h2>

          <p>Score: {stock.score}/100</p>
          <p>Risk: {stock.risk}</p>
          <p>Confidence: {stock.confidence}</p>
          <p>Type: {stock.type}</p>

          <button
            onClick={() => {
              alert(stock.name + " | AI Score: " + stock.score + "/100");
            }}
          >
            View Opportunity
          </button>
        </div>
      ))}
    </div>
  );
}
